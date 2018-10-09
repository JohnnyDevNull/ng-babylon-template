import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private camera: BABYLON.FreeCamera;
  private scene: BABYLON.Scene;
  private light: BABYLON.Light;

  private sphere: BABYLON.Mesh;

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    // Then, load the Babylon 3D engine:
    this.engine = new BABYLON.Engine(this.canvas,  true);

    // create a basic BJS Scene object
    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(5, 10, -20), this.scene);

    // target the camera to scene origin
    this.camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    this.camera.attachControl(this.canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);

    // create a built-in "sphere" shape; its constructor takes 4 params: name, subdivisions, radius, scene
    this.sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);

    // create the material with its texture for the sphere and assign it to the sphere
    let spherMaterial = new BABYLON.StandardMaterial('sun_surface', this.scene);
    spherMaterial.diffuseTexture = new BABYLON.Texture('assets/textures/sun.jpg', this.scene);
    this.sphere.material = spherMaterial;

    // move the sphere upward 1/2 of its height
    this.sphere.position.y = 1;

    // simple rotation along the y axis
    let angle = 0.02;
    this.scene.registerAfterRender(() => {
      this.sphere.rotate (
        new BABYLON.Vector3(0, 1, 0),
        0.02,
        BABYLON.Space.LOCAL
      );
    });

    // generates the world x-y-z axis for better understanding
    this.showWorldAxis(8);
  }

  animate(): void {
    const $scope = this;

    window.addEventListener('DOMContentLoaded', () => {
      $scope.engine.runRenderLoop( () => {
        $scope.scene.render();
      });
    });

    window.addEventListener('resize', () => {
      $scope.engine.resize();
    });
  }

  /**
   * creates the world axes
   *
   * Source: https://doc.babylonjs.com/snippets/world_axes
   *
   * @param size number
   */
  showWorldAxis (size: number) {
    let $scope = this;

    let makeTextPlane = function(text: string, color: string, textSize: number) {
      let dynamicTexture = new BABYLON.DynamicTexture('DynamicTexture', 50, $scope.scene, true);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color , 'transparent', true);
      let plane = BABYLON.Mesh.CreatePlane('TextPlane', textSize, $scope.scene, true);
      let material = new BABYLON.StandardMaterial('TextPlaneMaterial', $scope.scene);
      material.backFaceCulling = false;
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      material.diffuseTexture = dynamicTexture;
      plane.material = material;

      return plane;
    };

    let axisX = BABYLON.Mesh.CreateLines(
      'axisX',
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
      ],
      this.scene
    );

    axisX.color = new BABYLON.Color3(1, 0, 0);
    let xChar = makeTextPlane('X', 'red', size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

    let axisY = BABYLON.Mesh.CreateLines(
      'axisY',
      [
        BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
      ],
      this.scene
    );

    axisY.color = new BABYLON.Color3(0, 1, 0);
    let yChar = makeTextPlane('Y', 'green', size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

    let axisZ = BABYLON.Mesh.CreateLines(
      'axisZ',
      [
        BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
      ],
      this.scene
    );

    axisZ.color = new BABYLON.Color3(0, 0, 1);
    let zChar = makeTextPlane('Z', 'blue', size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  }
}
