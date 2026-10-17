import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TerminalComponent } from './terminal';
import { FormsModule } from '@angular/forms';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalComponent, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial currentPath', () => {
    expect(component.currentPath).toEqual('ghizlane@portfolio:~$');
  });

  it('should add a welcome message on init', () => {
    expect(component.lines.length).toBe(1);
    expect(component.lines[0].text).toContain('Welcome to Ghizlane CHTOUKI');
  });

  it('should handle whoami command', () => {
    component.command = 'whoami';
    component.handleCommand();

    const outputLines = component.lines;
    const lastOutput = outputLines[outputLines.length - 1];
    expect(lastOutput.text).toContain('Ghizlane CHTOUKI');
    expect(lastOutput.text).toContain('Data Analyst');
  });

  it('should clear terminal with clear command', () => {
     component.command = 'whoami';
     component.handleCommand();
     expect(component.lines.length).toBeGreaterThan(0);

     component.command = 'clear';
     component.handleCommand();
     expect(component.lines.length).toBe(0);
  });
});
