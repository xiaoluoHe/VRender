import { createStage, createSymbol, container, IGraphic, XMLParser } from '@visactor/vrender';
import { roughModule } from '@visactor/vrender-kits';
// import { addShapesToStage, colorPools } from '../utils';
// import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { AABBBounds } from '@visactor/vutils';

container.load(roughModule);

export const page = () => {
  console.time();
  const parser = new XMLParser({ ignoreAttributes: false });
  const result = parser.parse(
    // `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    // <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    // </svg>`

    `<svg t="1694424698284" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13305" width="200" height="200"><path d="M915.393939 217.212121c0 119.963152-180.596364 217.212121-403.393939 217.212121S108.606061 337.175273 108.606061 217.212121s180.596364-217.212121 403.393939-217.212121 403.393939 97.24897 403.393939 217.212121z" fill="#C1D0FF" p-id="13306"></path><path d="M884.363636 372.363636c0 119.963152-166.725818 217.212121-372.363636 217.212122S139.636364 492.326788 139.636364 372.363636s166.725818-217.212121 372.363636-217.212121 372.363636 97.24897 372.363636 217.212121z" fill="#0F62FE" p-id="13307"></path><path d="M915.393939 217.212121c0 119.963152-180.596364 217.212121-403.393939 217.212121S108.606061 337.175273 108.606061 217.212121s180.596364-217.212121 403.393939-217.212121 403.393939 97.24897 403.393939 217.212121z" fill="#E8E8E8" fill-opacity=".1" p-id="13308"></path><path d="M782.522182 343.505455C714.876121 379.87297 619.302788 403.393939 512 403.393939c-107.271758 0-202.876121-23.489939-270.522182-59.888484C172.528485 306.331152 139.636364 260.282182 139.636364 217.212121c0-43.101091 32.892121-89.150061 101.841454-126.293333C309.123879 54.551273 404.697212 31.030303 512 31.030303c107.271758 0 202.876121 23.489939 270.522182 59.888485C851.471515 128.093091 884.363636 174.142061 884.363636 217.212121c0 43.101091-32.892121 89.150061-101.841454 126.293334zM512 434.424242c222.797576 0 403.393939-97.24897 403.393939-217.212121s-180.596364-217.212121-403.393939-217.212121S108.606061 97.24897 108.606061 217.212121s180.596364 217.212121 403.393939 217.212121z" fill="#FFFFFF" fill-opacity=".6" p-id="13309"></path><path d="M451.677091 341.147152a13.498182 13.498182 0 0 0 13.777454-13.591273 14.149818 14.149818 0 0 0-13.777454-13.994667c-51.106909-1.768727-99.483152-13.312-135.912727-32.581818-39.718788-21.038545-62.060606-49.555394-62.060606-79.282424 0-29.72703 22.341818-58.243879 62.060606-79.251394 36.429576-19.300848 84.805818-30.844121 135.912727-32.581818a14.149818 14.149818 0 0 0 13.777454-14.025697 13.467152 13.467152 0 0 0-13.777454-13.591273c-64.915394 1.799758-126.510545 16.259879-172.714667 40.711757C229.500121 129.148121 201.69697 164.677818 201.69697 201.69697c0 37.019152 27.803152 72.548848 77.265454 98.738424 46.204121 24.451879 107.799273 38.912 172.714667 40.711758z m61.967515 0a13.560242 13.560242 0 0 0 13.870546-13.591273v-0.775758a13.34303 13.34303 0 0 0-13.001697-13.218909 13.28097 13.28097 0 0 0-13.467152 10.395152l-0.155151 0.713697a13.560242 13.560242 0 0 0 12.753454 16.44606z" fill="#FFFFFF" p-id="13310"></path><path d="M870.710303 542.782061c-48.593455 86.667636-189.843394 149.348848-356.507151 149.348848-166.632727 0-307.882667-62.681212-356.507152-149.348848-11.729455 20.914424-18.059636 43.225212-18.059636 66.404848 0 119.125333 167.718788 215.691636 374.566788 215.691636 206.87903 0 374.597818-96.566303 374.597818-215.722666 0-23.148606-6.330182-45.459394-18.059637-66.373818z" fill="#0F62FE" p-id="13311"></path><path d="M870.710303 741.934545c-48.593455 86.636606-189.843394 149.317818-356.507151 149.317819-166.632727 0-307.882667-62.681212-356.507152-149.348849-11.729455 20.914424-18.059636 43.225212-18.059636 66.404849C139.636364 927.402667 307.355152 1024 514.203152 1024c206.87903 0 374.597818-96.566303 374.597818-215.722667 0-23.148606-6.330182-45.459394-18.059637-66.373818z" fill="#0F62FE" p-id="13312"></path></svg>`
  );
  console.log(result);

  // const isSvg = XMLValidator.validate(
  //   `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  // <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  // </svg>`,
  //   {
  //     allowBooleanAttributes: true
  //   }
  // );
  // console.log(isSvg);
  // const result = parser.parse(
  //   `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //   </svg>`
  // );
  console.timeEnd();
  // console.log(result);
  const symbolList = [
    'circle',
    'cross',
    'diamond',
    'square',
    'arrow',
    'arrow2Left',
    'arrow2Right',
    'arrow2Up',
    'arrow2Down',
    'wedge',
    'thinTriangle',
    'triangle',
    'triangleUp',
    'triangleDown',
    'triangleRight',
    'triangleLeft',
    'stroke',
    'star',
    'wye',
    'rect',
    'lineH',
    'lineV',
    'close',
    'M -2 2 L 4 -5 L 7 -6 L 6 -3 L -1 3 C 0 4 0 5 1 4 C 1 5 2 6 1 6 A 1.42 1.42 0 0 1 0 7 A 5 5 0 0 0 -2 4 Q -2.5 3.9 -2.5 4.5 T -4 5.8 T -4.8 5 T -3.5 3.5 T -3 3 A 5 5 90 0 0 -6 1 A 1.42 1.42 0 0 1 -5 0 C -5 -1 -4 0 -3 0 C -4 1 -3 1 -2 2 M 4 -5 L 4 -3 L 6 -3 L 5 -4 L 4 -5',
    `<svg t="1694424698284" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13305" width="200" height="200"><path d="M915.393939 217.212121c0 119.963152-180.596364 217.212121-403.393939 217.212121S108.606061 337.175273 108.606061 217.212121s180.596364-217.212121 403.393939-217.212121 403.393939 97.24897 403.393939 217.212121z" fill="#C1D0FF" p-id="13306"></path><path d="M884.363636 372.363636c0 119.963152-166.725818 217.212121-372.363636 217.212122S139.636364 492.326788 139.636364 372.363636s166.725818-217.212121 372.363636-217.212121 372.363636 97.24897 372.363636 217.212121z" fill="#0F62FE" p-id="13307"></path><path d="M915.393939 217.212121c0 119.963152-180.596364 217.212121-403.393939 217.212121S108.606061 337.175273 108.606061 217.212121s180.596364-217.212121 403.393939-217.212121 403.393939 97.24897 403.393939 217.212121z" fill="#E8E8E8" fill-opacity=".1" p-id="13308"></path><path d="M782.522182 343.505455C714.876121 379.87297 619.302788 403.393939 512 403.393939c-107.271758 0-202.876121-23.489939-270.522182-59.888484C172.528485 306.331152 139.636364 260.282182 139.636364 217.212121c0-43.101091 32.892121-89.150061 101.841454-126.293333C309.123879 54.551273 404.697212 31.030303 512 31.030303c107.271758 0 202.876121 23.489939 270.522182 59.888485C851.471515 128.093091 884.363636 174.142061 884.363636 217.212121c0 43.101091-32.892121 89.150061-101.841454 126.293334zM512 434.424242c222.797576 0 403.393939-97.24897 403.393939-217.212121s-180.596364-217.212121-403.393939-217.212121S108.606061 97.24897 108.606061 217.212121s180.596364 217.212121 403.393939 217.212121z" fill="#FFFFFF" fill-opacity=".6" p-id="13309"></path><path d="M451.677091 341.147152a13.498182 13.498182 0 0 0 13.777454-13.591273 14.149818 14.149818 0 0 0-13.777454-13.994667c-51.106909-1.768727-99.483152-13.312-135.912727-32.581818-39.718788-21.038545-62.060606-49.555394-62.060606-79.282424 0-29.72703 22.341818-58.243879 62.060606-79.251394 36.429576-19.300848 84.805818-30.844121 135.912727-32.581818a14.149818 14.149818 0 0 0 13.777454-14.025697 13.467152 13.467152 0 0 0-13.777454-13.591273c-64.915394 1.799758-126.510545 16.259879-172.714667 40.711757C229.500121 129.148121 201.69697 164.677818 201.69697 201.69697c0 37.019152 27.803152 72.548848 77.265454 98.738424 46.204121 24.451879 107.799273 38.912 172.714667 40.711758z m61.967515 0a13.560242 13.560242 0 0 0 13.870546-13.591273v-0.775758a13.34303 13.34303 0 0 0-13.001697-13.218909 13.28097 13.28097 0 0 0-13.467152 10.395152l-0.155151 0.713697a13.560242 13.560242 0 0 0 12.753454 16.44606z" fill="#FFFFFF" p-id="13310"></path><path d="M870.710303 542.782061c-48.593455 86.667636-189.843394 149.348848-356.507151 149.348848-166.632727 0-307.882667-62.681212-356.507152-149.348848-11.729455 20.914424-18.059636 43.225212-18.059636 66.404848 0 119.125333 167.718788 215.691636 374.566788 215.691636 206.87903 0 374.597818-96.566303 374.597818-215.722666 0-23.148606-6.330182-45.459394-18.059637-66.373818z" fill="#0F62FE" p-id="13311"></path><path d="M870.710303 741.934545c-48.593455 86.636606-189.843394 149.317818-356.507151 149.317819-166.632727 0-307.882667-62.681212-356.507152-149.348849-11.729455 20.914424-18.059636 43.225212-18.059636 66.404849C139.636364 927.402667 307.355152 1024 514.203152 1024c206.87903 0 374.597818-96.566303 374.597818-215.722667 0-23.148606-6.330182-45.459394-18.059637-66.373818z" fill="#0F62FE" p-id="13312"></path></svg>`,
    `<svg t="1700725195071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1473" width="200" height="200"><path d="M512 57.6c-246.4 0-448 201.6-448 448s201.6 448 448 448 448-201.6 448-448-201.6-448-448-448zM732.8 448l-9.6 230.4c0 6.4-3.2 9.6-6.4 12.8-3.2 0-60.8 38.4-198.4 38.4-137.6 0-198.4-35.2-198.4-38.4-3.2-3.2-6.4-6.4-6.4-12.8L294.4 448c-19.2-9.6-28.8-28.8-28.8-51.2 0-32 25.6-57.6 57.6-57.6s57.6 25.6 57.6 57.6c0 28.8-19.2 51.2-44.8 57.6 19.2 38.4 51.2 83.2 73.6 83.2 12.8 0 41.6-35.2 76.8-131.2-22.4-9.6-38.4-32-38.4-60.8 0-35.2 28.8-64 67.2-64s64 28.8 64 64c0 25.6-16 48-38.4 60.8 32 89.6 64 134.4 80 134.4s48-41.6 70.4-89.6c-25.6-6.4-44.8-28.8-44.8-57.6 0-32 25.6-57.6 57.6-57.6s57.6 25.6 57.6 57.6c0 25.6-12.8 44.8-28.8 54.4z" p-id="1474"></path></svg>`
  ];
  const graphics: IGraphic[] = [];

  const circle = createSymbol({
    symbolType: 'circle',
    x: 120,
    y: 120,
    stroke: 'red',
    lineWidth: 3,
    lineCap: 'round',
    size: 60,
    fill: 'green'
  });

  circle.addEventListener('mouseenter', e => {
    circle.setAttributes({ globalZIndex: 1 });
  });

  circle.addEventListener('mouseleave', e => {
    circle.setAttributes({ globalZIndex: 0 });
  });

  graphics.push(circle);

  symbolList.forEach((st, i) => {
    const symbol = createSymbol({
      symbolType: st,
      x: ((i * 100) % 500) + 100,
      y: (Math.floor((i * 100) / 500) + 1) * 100,
      stroke: 'black',
      lineWidth: 3,
      lineCap: 'round',
      renderStyle: Math.random() > 0.5 ? 'rough' : '',
      size: 60,
      // fill: 'red'
      background:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfMTUxNjkpIj4KPHBhdGggZD0iTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFoiIGZpbGw9IiNGMEYwRjAiLz4KPHBhdGggZD0iTTIwIDkuOTk5OTZDMjAgNS43MDAzMSAxNy4yODYzIDIuMDM0ODggMTMuNDc4MyAwLjYyMTk0OFYxOS4zNzhDMTcuMjg2MyAxNy45NjUgMjAgMTQuMjk5NiAyMCA5Ljk5OTk2WiIgZmlsbD0iI0Q4MDAyNyIvPgo8cGF0aCBkPSJNMCA5Ljk5OTk2QzAgMTQuMjk5NiAyLjcxMzc1IDE3Ljk2NSA2LjUyMTc2IDE5LjM3OFYwLjYyMTk0OEMyLjcxMzc1IDIuMDM0ODggMCA1LjcwMDMxIDAgOS45OTk5NloiIGZpbGw9IiM2REE1NDQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzE1MTY5Ij4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo='
      // texture: 'diamond',
      // texturePadding: 0,
      // textureSize: 3,
      // textureColor: 'red'
    });
    // symbol.setMode('3d');
    graphics.push(symbol);
  });

  const stage = createStage({
    canvas: 'main',
    autoRender: true
    // background:
    //   'https://s3-alpha-sig.figma.com/img/4747/5f86/562da50af0c51b61008385ba3547c61e?Expires=1699228800&Signature=AZA8zspJv2JOj2m6ICzBiybvIEfzvQV90JZ2QRvyNdOZ8zUv0u9CG2A85tRln~1x8JpNsetdaxj8iY8XnIstKSFrxiXuUvbjgZk8U0wlBqv5ruJgwvIcI3UjPIgr5dB9sxPQG9LGeA9SnpsxMVNLDkq9xV0Vl-7sSJ0aJYdN~uvFISfWvShXvrZoExGdVRMcEuXPQrO1rd-1nSl1VX~RLD1tQhqrftpYxHU0bkalR~Wz6ygCHdLX9VCJ4CuGIyjYVDq7Xl4Lasq-xQMTMLWyYts~SmIRL5BjffsgXRSD9DAI7I4Tm2W7aSsItuUZks7xdrD155Cq3cnvdzuKFdI1wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  });
  // stage.set3dOptions({
  //   enable: true,
  //   alpha: 0.3
  // });

  graphics.forEach(g => {
    stage.defaultLayer.add(g);
  });
  console.log(stage);

  const c = stage.toCanvas(false, new AABBBounds().set(100, 100, 300, 360));
  // document.body.appendChild(c);
};
