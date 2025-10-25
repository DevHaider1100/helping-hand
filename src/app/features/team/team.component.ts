import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../shared/data/teamMembers';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = TEAM_MEMBERS;
}
