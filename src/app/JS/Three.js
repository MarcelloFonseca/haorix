//Imports
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Stats from 'stats.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

//Global variables
const width = window.innerWidth, height = window.innerHeight
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(14, width / height, 0.1, 1000);
const elementDOM = document.getElementsByClassName("canvas")[0];
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const stats = new Stats();
const loader = new GLTFLoader();

const initializeEnv = () => {
    renderer.setSize(width, height);
    renderer.physicallyCorrectLights = true;
    renderer.alphaBuffer = false;
    renderer.stencilBuffer = false;
    renderer.powerPreference = "high-performance";
    elementDOM.appendChild(renderer.domElement);
    scene.background = new THREE.Color('white');
    lighting();
    modelLoader();
    statsPanel();
};

const orbitControlsHelper = (position, size) => {
    controls.target.copy(position);
    controls.maxDistance = 4;
    controls.minDistance = 2;
    controls.update();

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = THREE.MathUtils.degToRad(camera.fov);
    let cameraZ = (maxDim / 2) / Math.tan(fov / 2);

    camera.position.copy(position);
    camera.position.z += cameraZ * 1.5; 
    camera.near = cameraZ / 100;
    camera.far  = cameraZ * 100;
    camera.updateProjectionMatrix(); //Important pour update le fov initial
};

const lighting = () => {
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(3, 5, 2);
    scene.add(dirLight);
}

const modelLoader = () => {
    loader.setMeshoptDecoder(MeshoptDecoder); //Optimizer le rendering et loading de l'asset
    loader.load("/H-Dash-Off-optimized.gltf", (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                const box = new THREE.Box3().setFromObject(model);
                const boxSize = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                orbitControlsHelper(center, boxSize);
            }, undefined, (err) => console.error("GLTF load error:", err));
}

const statsPanel = () => { //Mesurer les performances
    stats.showPanel(0, 1);
    stats.dom.style.transform = 'scale(2)'; 
    stats.dom.style.paddingTop = '30px';
    stats.dom.style.marginLeft = '100px';
    document.body.appendChild(stats.dom);
};

function animate() {
    stats.begin();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    stats.end();
}

initializeEnv();
animate();
