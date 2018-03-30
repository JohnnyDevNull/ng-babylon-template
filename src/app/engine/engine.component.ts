import { EngineService } from './engine.service';
import { Component, OnInit } from '@angular/core';

import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: []
})
export class EngineComponent implements OnInit {
  private canEleId = 'renderCanvas';

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }
}
