import './style.css';

import * as THREE from 'three';

// planets

function loadEarth() {

    const earthTexture = new THREE.TextureLoader().load('earth.jpg');
    
    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial( {
            map: earthTexture,
        } )
    );
    
    scene.add(earth);
    
    earth.position.z = -20;
    earth.position.setX(10);
}



function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	earth.rotation.x += 0.05;
	earth.rotation.y += 0.075;
	earth.rotation.z += 0.05;
	
	camera.position.z += 0.1;
	camera.position.x += 0.2;
	camera.position.y += 0.05;
	// camera.position.z = t * -0.01;
	// camera.position.x = t * -0.0002;
	// camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;


function animate() {
	requestAnimationFrame( animate );

	// capsule.rotation.x += 0.01;
	// capsule.rotation.y += 0.01;
	// capsule.rotation.z += 0.01;

	earth.rotation.z += 0.01;

	// controls.update();

	renderer.render( scene, camera );
}

animate();