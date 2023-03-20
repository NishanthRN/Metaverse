import Movements from "./movement.js";
import polygon from './Web3.js'

const scene = new THREE.Scene();
//Contract Address = 0xAB71ff3696e9E71052eC989Df20260BAE8d890e8
scene.background = new THREE.Color(0x8AE1FC);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const lighting = new THREE.AmbientLight(0xEA526F);
const direction = new THREE.DirectionalLight(0x00ff00, 1);
lighting.add(direction);
scene.add(lighting);

const geometry_area = new THREE.BoxGeometry(100, 0.2, 55);
const material_area = new THREE.MeshPhongMaterial({ color: 0xAEF6C7 });
const area = new THREE.Mesh(geometry_area, material_area);
scene.add(area);


const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshPhongMaterial({ color: 0xEA526F });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry_cyl = new THREE.CylinderGeometry(5, 5, 15, 32);
const material_cyl = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cylinder = new THREE.Mesh(geometry_cyl, material_cyl);
scene.add(cylinder);


const geometry_tor = new THREE.TorusGeometry(8, 3, 13, 100);
const material_tor = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(geometry_tor, material_tor);
scene.add(torus);

torus.position.set(-30, 5, 0);
cylinder.position.set(30, 5, 0);
camera.position.z = 5;
camera.position.set(10, 5, 40);

function animate() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;
    cylinder.rotation.x += 0.07;
    cylinder.rotation.y += 0.07;
    cylinder.rotation.z += 0.07;
    torus.rotation.x += 0.05;
    torus.rotation.z += 0.05;
    torus.rotation.y += 0.05;
    requestAnimationFrame(animate);

    if (Movements.isPressed(37)) { //left
        camera.position.x -= 0.5;
    }
    if (Movements.isPressed(38)) { //up
        camera.position.x += 0.5;
        camera.position.y += 0.5;
    }
    if (Movements.isPressed(39)) { //right
        camera.position.x += 0.5;
    }
    if (Movements.isPressed(40)) { //down
        camera.position.x -= 0.5;
        camera.position.y -= 0.5;
    }
    camera.lookAt(area.position);
    renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);

polygon.then((result) => {
    result.nft.forEach((object, index) => {
        if (index <= result.supply) {

        }
    })
})
