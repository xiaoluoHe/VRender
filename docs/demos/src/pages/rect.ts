import { createStage, createRect, IGraphic, createGroup } from '@visactor/vrender';
import { roughModule } from '@visactor/vrender-kits';
import { addShapesToStage, colorPools } from '../utils';

// container.load(roughModule);
export const page = () => {
  const graphics: IGraphic[] = [];
  graphics.push(
    createRect({
      x: 100,
      y: 100,
      width: 20,
      height: 100,
      fill: colorPools[10],
      stroke: [colorPools[0], colorPools[0], colorPools[0], colorPools[0]],
      cornerRadius: 10,
      lineWidth: 5
    })
  );

  graphics.push(
    createRect({
      x: 300,
      y: 100,
      width: 100,
      height: 100,
      fill: {
        gradient: 'linear',
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 0,
        stops: [
          { offset: 0, color: 'green' },
          { offset: 0.5, color: 'orange' },
          { offset: 1, color: 'red' }
        ]
      },
      cornerRadius: [5, 10, 15, 20],
      lineWidth: 5
    })
  );

  const r = createRect({
    x: 300,
    y: 300,
    width: 100,
    height: 100,
    scaleX: 2,
    scaleY: 2,
    // angle: 0.3,
    // anchor: [400, 400],
    scaleCenter: [350, 350],
    background:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAACiSURBVMXBsQmDUABF0evLrwISy2yQ1g3UzpHcyBXs9HeCE2SJgEhq0waxEBTeOckEK0bCTJgJM2EW2PGoa9Ki4EpLjMxdx1ZgR1oUPJuGq81dx5YwE2bCLHDSMgxs3fOcW5ZxROCkd1Wx9ep70rLkCGEmzISZMBNmwkyYCTNhJsyEmTATZsIssGOJkTM+bct3HPm3xMieZIIVI2EmzISZMPsBPLUeCZWhvyQAAAAASUVORK5CYII=',
    // cornerRadius: 100,
    lineWidth: 5
  });
  graphics.push(r);

  // r.animate().to({ angle: 10 }, 10000, 'linear');

  const stage = createStage({
    canvas: 'main',
    autoRender: true
  });

  const group = createGroup({
    x: 200,
    y: 200
  });

  stage.defaultLayer.add(group);
  graphics.forEach(g => {
    group.add(g);
  });
};
