/* tslint:disable no-magic-numbers */
import {
	TimelineMax
} from 'gsap';

export default function animate() {

	const tlcDate = new TimelineMax();
	const tlcScreenNoise = new TimelineMax();
	const tlcCatThinking1 = new TimelineMax();
	const tlcCodeEditor = new TimelineMax();
	const tlcCreatingBallStage1 = new TimelineMax();
	const tlcCreatingBallStage2 = new TimelineMax();
	const tlcCreatingBallStage3 = new TimelineMax();
	const tlcCodeEditorWithScreenNoise = new TimelineMax();
	const tlcBrokeScreen = new TimelineMax();
	const tlcBall = new TimelineMax();
	const tlcCatsFromScreen = new TimelineMax();
	const tlcCatThinking2 = new TimelineMax();
	const tlcCatFromScreen2 = new TimelineMax();
	const tlcCatFromScreen3 = new TimelineMax();
	const tlcCatFromScreen4 = new TimelineMax();
	const tlcCatFromScreen5 = new TimelineMax();
	const tlcCatWatcher = new TimelineMax();
	const tlcFinalCat = new TimelineMax();
	const tlcCounter = new TimelineMax();

	// Date animation
	tlcDate.from('#Date', 0.5, {
		opacity: 1,
		delay: 4
	});

	tlcDate.to('#Date', 0.5, {
		opacity: 0
	});

	// ScreenNoise animation
	tlcScreenNoise.from('#ScreenNoise', 0.5, {
		opacity: 0,
		delay: 5
	});

	tlcScreenNoise.to('#ScreenNoise', 0.5, {
		opacity: 1
	});

	tlcScreenNoise.to('#ScreenNoise', 0.5, {
		opacity: 0,
		delay: 1
	});

	// CodeEditor animation
	tlcCodeEditor.from('#CodeEditor', 0.5, {
		opacity: 0,
		delay: 8
	});

	tlcCodeEditor.to('#CodeEditor', 0.5, {
		opacity: 1
	});

	// CatThinking1 animation
	tlcCatThinking1.from('#CatThinking1', 0.5, {
		opacity: 0,
		delay: 9
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		opacity: 1
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		y: 10
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		y: 0
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		y: 10
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		y: 0
	});

	tlcCatThinking1.to('#CatThinking1', 0.5, {
		opacity: 0
	});

	// CreatingBallStage1 animation
	tlcCreatingBallStage1.from('#CreatingBallStage1', 0.5, {
		opacity: 0,
		delay: 10
	});

	tlcCreatingBallStage1.to('#CreatingBallStage1', 0.5, {
		opacity: 1
	});

	tlcCreatingBallStage1.to('#CreatingBallStage1', 0.5, {
		opacity: 0,
		delay: 6
	});

	tlcCreatingBallStage1.to('#CreatingBallStage1', 0.5, {
		opacity: 1,
		delay: 1
	});

	tlcCreatingBallStage1.to('#CreatingBallStage1', 0.5, {
		opacity: 0,
		delay: 2
	});

	// CreatingBallStage2 animation
	tlcCreatingBallStage2.from('#CreatingBallStage2', 0.5, {
		opacity: 0,
		delay: 12
	});

	tlcCreatingBallStage2.to('#CreatingBallStage2', 0.5, {
		opacity: 1
	});

	tlcCreatingBallStage2.to('#CreatingBallStage2', 0.5, {
		opacity: 0,
		delay: 1
	});

	// CreatingBallStage3 animation
	tlcCreatingBallStage3.from('#CreatingBallStage3', 0.5, {
		opacity: 0,
		delay: 15
	});

	tlcCreatingBallStage3.to('#CreatingBallStage3', 0.5, {
		opacity: 1
	});

	tlcCreatingBallStage3.to('#CreatingBallStage3', 0.5, {
		opacity: 0,
		delay: 1
	});

	// CodeEditorWithScreenNoise animation
	tlcCodeEditorWithScreenNoise.from(
		'#CodeEditorWithScreenNoise',
		0.5,
		{
			opacity: 0,
			delay: 17
		}
	);

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 1
	});

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 0
	});

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 1,
		delay: 3
	});

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 0
	});

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 1,
		delay: 17
	});

	tlcCodeEditorWithScreenNoise.to('#CodeEditorWithScreenNoise', 0.5, {
		opacity: 0
	});

	// BrokeScreen animation
	tlcBrokeScreen.from('#BrokeScreen', 0.5, {
		opacity: 0,
		delay: 16
	});

	tlcBrokeScreen.to('#BrokeScreen', 0.5, {
		opacity: 1,
		delay: 2
	});

	tlcBrokeScreen.to('#BrokeScreen', 0.5, {
		opacity: 0,
		delay: 2
	});

	// Ball animation
	tlcBall.from('#Ball', 0.5, {
		opacity: 0,
		delay: 18
	});

	tlcBall.to('#Ball', 0.5, {
		opacity: 1,
		x: -685,
		y: 415
	});

	tlcBall.to('#Ball', 0.5, {
		y: 350
	});

	tlcBall.to('#Ball', 0.5, {
		y: 415
	});

	tlcBall.to('#Ball', 0.5, {
		y: 375
	});

	tlcBall.to('#Ball', 0.5, {
		y: 415
	});

	tlcBall.to('#Ball', 0.5, {
		x: -485,
		transformOrigin: '50% 50%',
		rotation: '250deg',
		delay: 7
	});

	tlcBall.to('#Ball', 0.5, {
		x: -285,
		transformOrigin: '50% 50%',
		rotation: '500deg',
		delay: 2
	});

	tlcBall.to('#Ball', 0.5, {
		x: 85,
		transformOrigin: '50% 50%',
		rotation: '750deg',
		delay: 2
	});

	tlcBall.to('#Ball', 0.5, {
		y: 700,
		transformOrigin: '50% 50%',
		delay: 3
	});

	// CatsFromScreen animation
	tlcCatsFromScreen.from('#CatsFromScreen', 0.5, {
		opacity: 0,
		delay: 23
	});

	tlcCatsFromScreen.to('#CatsFromScreen', 0.5, {
		opacity: 1
	});

	tlcCatsFromScreen.to('#CatsFromScreen', 0.5, {
		opacity: 0,
		delay: 16
	});

	// CatThinking2 animation
	tlcCatThinking2.from('#CatThinking2', 0.5, {
		opacity: 0,
		delay: 24
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		opacity: 1
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		y: 10
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		y: 0
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		y: 10
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		y: 0
	});

	tlcCatThinking2.to('#CatThinking2', 0.5, {
		opacity: 0
	});

	// CatFromScreen2 animation
	tlcCatFromScreen2.from('#CatFromScreen2', 0.5, {
		opacity: 0,
		delay: 26
	});

	tlcCatFromScreen2.to('#CatFromScreen2', 0.5, {
		opacity: 1
	});

	// CatFromScreen3 animation
	tlcCatFromScreen3.from('#CatFromScreen3', 0.5, {
		opacity: 0,
		delay: 28
	});

	tlcCatFromScreen3.to('#CatFromScreen3', 0.5, {
		opacity: 1
	});

	// CatFromScreen4 animation
	tlcCatFromScreen4.from('#CatFromScreen4', 0.5, {
		opacity: 0,
		delay: 30
	});

	tlcCatFromScreen4.to('#CatFromScreen4', 0.5, {
		opacity: 1
	});

	// CatFromScreen5 animation
	tlcCatFromScreen5.from('#CatFromScreen5', 0.5, {
		opacity: 0,
		delay: 33
	});

	tlcCatFromScreen5.to('#CatFromScreen5', 0.5, {
		opacity: 1
	});

	// CatWatcher animation
	tlcCatWatcher.from('#CatWatcher', 0.5, {
		opacity: 1,
		delay: 35
	});

	tlcCatWatcher.to('#CatWatcher', 0.5, {
		opacity: 0
	});

	// FinalCat animation
	tlcFinalCat.from('#FinalCat', 0.5, {
		opacity: 0,
		delay: 36
	});

	tlcFinalCat.to('#FinalCat', 0.5, {
		opacity: 1
	});

	tlcFinalCat.to('#FinalCat', 0.5, {
		opacity: 0,
		delay: 2
	});

	// Counter animation
	tlcCounter.from('#Counter', 0.5, {
		opacity: 0,
		delay: 41
	});

	tlcCounter.to('#Counter', 0.5, {
		opacity: 1
	});
}
