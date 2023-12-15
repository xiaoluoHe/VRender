import * as VRender from '@visactor/vrender';
import * as VRenderCore from '@visactor/vrender-core';
import * as VRenderKits from '@visactor/vrender-kits';
import * as VRenderComponents from '@visactor/vrender-components';
import { addShapesToStage, colorPools } from '../utils';
import { pi, pi2 } from '@visactor/vutils';

export const page = () => {
  // @ts-ignore
  window.VRender = VRender;
  // @ts-ignore
  window.VRenderComponents = VRenderComponents;
  // @ts-ignore
  window.VRenderCore = VRenderCore;
  // @ts-ignore
  window.VRenderKits = VRenderKits;
  import('https://tosv.byted.org/obj/dpvis/vchart-used-in-vrender-bugserver.js').then(async () => {
    window.ChartSpace = window.VChart;
    const spec = {
      type: 'pie',
      title: {
        visible: true,
        align: 'center',
        text: '2022年世界国家和地区GDP总量',
        subtext: '数据来源：国际货币基金组织（IMF）2023年4月发布',
        textStyle: {
          fill: '#FDFDFD',
          lineHeight: 28,
          fontSize: 22,
          fontFamily: 'PingFangSC-Regular',
          fontWeight: 'bolder'
        },
        subtextStyle: {
          fill: '#BBBDC3',
          lineHeight: 16,
          fontSize: 12,
          fontFamily: 'PingFangSC-Regular',
          fontWeight: 'bolder'
        },
        aaa: ''
      },
      outerRadius: 0.8,
      innerRadius: 0.5,
      pie: {
        style: {
          stroke: 'white',
          lineWidth: 1
        }
      },
      label: {
        visible: true,
        overlap: false
      },
      valueField: 'GDP',
      categoryField: 'Country Name CN',
      data: [
        {
          id: 'id',
          values: [
            {
              'Country Name': 'United States',
              'Country Name CN': '美国',
              'Country Code': 'USA',
              Year: '1960',
              GDP: '543300000000'
            },
            {
              'Country Name': 'United Kingdom',
              'Country Name CN': '英国',
              'Country Code': 'GBR',
              Year: '1960',
              GDP: '72328047042.1588'
            },
            {
              'Country Name': 'France',
              'Country Name CN': '法国',
              'Country Code': 'FRA',
              Year: '1960',
              GDP: '62651474946.6007'
            },
            {
              'Country Name': 'China',
              'Country Name CN': '中国',
              'Country Code': 'CHN',
              Year: '1960',
              GDP: '59716467625.3148'
            },
            {
              'Country Name': 'Japan',
              'Country Name CN': '日本',
              'Country Code': 'JPN',
              Year: '1960',
              GDP: '44307342950.4'
            },
            {
              'Country Name': 'Canada',
              'Country Name CN': '加拿大',
              'Country Code': 'CAN',
              Year: '1960',
              GDP: '41093453544.9096'
            },
            {
              'Country Name': 'Italy',
              'Country Name CN': '意大利',
              'Country Code': 'ITA',
              Year: '1960',
              GDP: '40385288344.1911'
            },
            {
              'Country Name': 'India',
              'Country Name CN': '印度',
              'Country Code': 'IND',
              Year: '1960',
              GDP: '36535925029.925'
            },
            {
              'Country Name': 'Australia',
              'Country Name CN': '澳大利亚',
              'Country Code': 'AUS',
              Year: '1960',
              GDP: '18593347519.3191'
            },
            {
              'Country Name': 'Brazil',
              'Country Name CN': '巴西',
              'Country Code': 'BRA',
              Year: '1960',
              GDP: '15165569912.5199'
            }
          ],
          fields: {
            'Country Name CN': {
              sortIndex: 0,
              domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
            }
          }
        }
      ],
      player: {
        type: 'continuous',
        orient: 'bottom',
        auto: false,
        loop: false,
        dx: 0,
        position: 'middle',
        interval: 253.44827586206895,
        specs: [
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1960',
                    GDP: '543300000000'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1960',
                    GDP: '72328047042.1588'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1960',
                    GDP: '62651474946.6007'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1960',
                    GDP: '59716467625.3148'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1960',
                    GDP: '44307342950.4'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1960',
                    GDP: '41093453544.9096'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1960',
                    GDP: '40385288344.1911'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1960',
                    GDP: '36535925029.925'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1960',
                    GDP: '18593347519.3191'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1960',
                    GDP: '15165569912.5199'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1960',
                    GDP: '543300000000'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1960',
                    GDP: '72328047042.1588'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1960',
                    GDP: '62651474946.6007'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1960',
                    GDP: '59716467625.3148'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1960',
                    GDP: '44307342950.4'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1960',
                    GDP: '41093453544.9096'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1960',
                    GDP: '40385288344.1911'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1960',
                    GDP: '36535925029.925'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1960',
                    GDP: '18593347519.3191'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1960',
                    GDP: '15165569912.5199'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1961',
                    GDP: '563300000000'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1961',
                    GDP: '76694360635.9159'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1961',
                    GDP: '68346741504.4257'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1961',
                    GDP: '53508617739.3778'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1961',
                    GDP: '50056868957.6732'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1961',
                    GDP: '44842760293.1924'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1961',
                    GDP: '40767969453.696'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1961',
                    GDP: '38709096075.0961'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1961',
                    GDP: '19666256019.7111'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1961',
                    GDP: '15236854859.469'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1962',
                    GDP: '605100000000'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1962',
                    GDP: '80601939635.2483'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1962',
                    GDP: '76313782251.6964'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1962',
                    GDP: '60723018683.7333'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1962',
                    GDP: '50383891898.9911'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1962',
                    GDP: '47209359005.6056'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1962',
                    GDP: '41978852041.4426'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1962',
                    GDP: '41599070245.0702'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1962',
                    GDP: '19926293839.0163'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1962',
                    GDP: '19911524246.8362'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1963',
                    GDP: '638600000000'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1963',
                    GDP: '85551113767.3727'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1963',
                    GDP: '85443766670.4279'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1963',
                    GDP: '69498131797.3333'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1963',
                    GDP: '57710743059.8341'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1963',
                    GDP: '50706799902.5103'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1963',
                    GDP: '47776000903.0009'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1963',
                    GDP: '44657169109.224'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1963',
                    GDP: '23021477292.2093'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1963',
                    GDP: '21527606674.8796'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1964',
                    GDP: '685800000000'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1964',
                    GDP: '94906593388.3107'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1964',
                    GDP: '93387598813.9269'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1964',
                    GDP: '81749006381.5111'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1964',
                    GDP: '63175417019.0094'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1964',
                    GDP: '59708343488.5043'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1964',
                    GDP: '55726873075.8731'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1964',
                    GDP: '48882938810.2204'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1964',
                    GDP: '23787658192.4068'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1964',
                    GDP: '21211892259.9904'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1965',
                    GDP: '743700000000'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1965',
                    GDP: '102160571409.274'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1965',
                    GDP: '100595782309.165'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1965',
                    GDP: '90950278257.7778'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1965',
                    GDP: '70436266146.7219'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1965',
                    GDP: '67978153850.5191'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1965',
                    GDP: '58760424674.5065'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1965',
                    GDP: '53909570342.169'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1965',
                    GDP: '25962593795.4978'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1965',
                    GDP: '21790035117.19'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1966',
                    GDP: '815000000000'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1966',
                    GDP: '110597467198.645'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1966',
                    GDP: '107090721447.057'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1966',
                    GDP: '105628070343.111'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1966',
                    GDP: '76720285969.6157'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1966',
                    GDP: '73654870011.2757'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1966',
                    GDP: '60358632035.1532'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1966',
                    GDP: '45253641300'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1966',
                    GDP: '27288610146.713'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1966',
                    GDP: '27062716577.9111'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1967',
                    GDP: '861700000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1967',
                    GDP: '123781880217.6'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1967',
                    GDP: '119466139619.589'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1967',
                    GDP: '111185383409.521'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1967',
                    GDP: '81133120065.4202'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1967',
                    GDP: '72881631326.6715'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1967',
                    GDP: '64768831262.1761'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1967',
                    GDP: '49466168893.3333'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1967',
                    GDP: '30591834053.9653'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1967',
                    GDP: '30421099787.2102'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1968',
                    GDP: '942500000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1968',
                    GDP: '146601072685.511'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1968',
                    GDP: '129847107787.883'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1968',
                    GDP: '104702736248.084'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1968',
                    GDP: '87942231678.3505'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1968',
                    GDP: '70846535055.6503'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1968',
                    GDP: '70759031841.7237'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1968',
                    GDP: '52377324280'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1968',
                    GDP: '33875881876.3672'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1968',
                    GDP: '32687870982.1929'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1969',
                    GDP: '1019900000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1969',
                    GDP: '172204199480.889'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1969',
                    GDP: '140725497222.277'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1969',
                    GDP: '112676874821.987'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1969',
                    GDP: '97085082807.3751'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1969',
                    GDP: '79705906247.4612'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1969',
                    GDP: '77887510241.7083'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1969',
                    GDP: '57668330026.6667'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1969',
                    GDP: '37458898243.8609'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1969',
                    GDP: '36659200358.3828'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1970',
                    GDP: '1075884000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1970',
                    GDP: '211514189326.389'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1970',
                    GDP: '148948860281.091'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1970',
                    GDP: '130671946244.3'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1970',
                    GDP: '113021271995.043'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1970',
                    GDP: '92602973434.0726'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1970',
                    GDP: '87896095224.4234'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1970',
                    GDP: '61589800520'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1970',
                    GDP: '42327600098.2412'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1970',
                    GDP: '41304737372.6061'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1971',
                    GDP: '1167770000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1971',
                    GDP: '238914956436.922'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1971',
                    GDP: '166564460755.298'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1971',
                    GDP: '148113896325.14'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1971',
                    GDP: '124261125468.165'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1971',
                    GDP: '99800958648.1436'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1971',
                    GDP: '99271961477.5203'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1971',
                    GDP: '66452561868.4154'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1971',
                    GDP: '49204456700.4516'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1971',
                    GDP: '45183111210.6619'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1972',
                    GDP: '1282449000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1972',
                    GDP: '316393344649.993'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1972',
                    GDP: '204283485045.514'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1972',
                    GDP: '169965034965.035'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1972',
                    GDP: '144780887782.205'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1972',
                    GDP: '113687586299.051'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1972',
                    GDP: '113082820992.019'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1972',
                    GDP: '70509913046.8528'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1972',
                    GDP: '58539008786.3684'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1972',
                    GDP: '52003504672.8972'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1973',
                    GDP: '1428549000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1973',
                    GDP: '429857320166.565'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1973',
                    GDP: '265381555686.506'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1973',
                    GDP: '192537971582.558'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1973',
                    GDP: '174913182331.451'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1973',
                    GDP: '138544284708.957'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1973',
                    GDP: '131321859214.079'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1973',
                    GDP: '84374541625.3338'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1973',
                    GDP: '79279057730.829'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1973',
                    GDP: '63782190903.2671'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1974',
                    GDP: '1548825000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1974',
                    GDP: '477155786487.722'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1974',
                    GDP: '286526186579.378'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1974',
                    GDP: '206131369798.971'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1974',
                    GDP: '198906210777.017'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1974',
                    GDP: '160408697648.262'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1974',
                    GDP: '144182133387.722'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1974',
                    GDP: '105136007528.76'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1974',
                    GDP: '98198276856.9136'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1974',
                    GDP: '88906411201.1791'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1975',
                    GDP: '1688923000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1975',
                    GDP: '518855814542.728'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1975',
                    GDP: '362000917852.226'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1975',
                    GDP: '241756637168.142'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1975',
                    GDP: '226944777283.511'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1975',
                    GDP: '173834029787.652'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1975',
                    GDP: '163431551779.761'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1975',
                    GDP: '123709376567.89'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1975',
                    GDP: '97226546497.3372'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1975',
                    GDP: '97159222028.3357'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1976',
                    GDP: '1877587000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1976',
                    GDP: '583142956487.974'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1976',
                    GDP: '373410270417.919'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1976',
                    GDP: '232614555256.065'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1976',
                    GDP: '223976030937.427'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1976',
                    GDP: '206575564401.623'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1976',
                    GDP: '153940455341.506'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1976',
                    GDP: '152678020452.829'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1976',
                    GDP: '104974158578.092'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1976',
                    GDP: '101346972433.237'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1977',
                    GDP: '2085951000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1977',
                    GDP: '717696307916.651'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1977',
                    GDP: '411464295266.114'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1977',
                    GDP: '263066457352.172'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1977',
                    GDP: '256746610489.357'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1977',
                    GDP: '211612156934.65'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1977',
                    GDP: '176171284311.761'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1977',
                    GDP: '174938098826.569'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1977',
                    GDP: '119866746569.343'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1977',
                    GDP: '110266116081.67'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1978',
                    GDP: '2356571000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1978',
                    GDP: '1008391778690.25'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1978',
                    GDP: '508183139534.884'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1978',
                    GDP: '335883029721.956'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1978',
                    GDP: '314019078256.902'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1978',
                    GDP: '218632867449.812'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1978',
                    GDP: '200800891870.164'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1978',
                    GDP: '149540752829.268'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1978',
                    GDP: '135468782810.558'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1978',
                    GDP: '118400631626.438'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1979',
                    GDP: '2632143000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1979',
                    GDP: '1049578503045.09'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1979',
                    GDP: '615834104224.484'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1979',
                    GDP: '438994070309.191'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1979',
                    GDP: '392378584945.234'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1979',
                    GDP: '243072102185.419'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1979',
                    GDP: '224969488835.181'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1979',
                    GDP: '178280594413.043'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1979',
                    GDP: '150950826964.984'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1979',
                    GDP: '134793820288.538'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1980',
                    GDP: '2862505000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1980',
                    GDP: '1099692917412.75'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1980',
                    GDP: '703525302701.025'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1980',
                    GDP: '564947710899.373'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1980',
                    GDP: '475682506443.59'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1980',
                    GDP: '273853826377.01'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1980',
                    GDP: '235024598983.261'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1980',
                    GDP: '191149211575'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1980',
                    GDP: '183839864648.794'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1980',
                    GDP: '149887465181.059'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1981',
                    GDP: '3210956000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1981',
                    GDP: '1215508719880.85'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1981',
                    GDP: '617589619794.81'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1981',
                    GDP: '540765675241.158'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1981',
                    GDP: '429282143246.466'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1981',
                    GDP: '306214863624.99'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1981',
                    GDP: '263561088977.129'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1981',
                    GDP: '195866382432.54'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1981',
                    GDP: '190909548793.872'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1981',
                    GDP: '176804829908.278'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1982',
                    GDP: '3344991000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1982',
                    GDP: '1129894523635.09'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1982',
                    GDP: '586837009681.605'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1982',
                    GDP: '515048916841.37'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1982',
                    GDP: '425863251968.504'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1982',
                    GDP: '313506525087.136'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1982',
                    GDP: '281682304161.041'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1982',
                    GDP: '205089699858.779'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1982',
                    GDP: '198037712680.328'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1982',
                    GDP: '193954540439.148'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1983',
                    GDP: '3638137000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1983',
                    GDP: '1232343804284.17'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1983',
                    GDP: '561852138738.274'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1983',
                    GDP: '489618008185.539'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1983',
                    GDP: '441580962901.581'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1983',
                    GDP: '340547711781.889'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1983',
                    GDP: '230686747153.257'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1983',
                    GDP: '215350771423.861'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1983',
                    GDP: '203304515490.795'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1983',
                    GDP: '177176415535.798'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1984',
                    GDP: '4040693000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1984',
                    GDP: '1309740021609.74'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1984',
                    GDP: '532648802822.187'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1984',
                    GDP: '461487097632.349'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1984',
                    GDP: '436443280912.497'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1984',
                    GDP: '355372558103.621'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1984',
                    GDP: '259946510957.143'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1984',
                    GDP: '209328156804.186'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1984',
                    GDP: '209023912696.839'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1984',
                    GDP: '193503894222.061'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1985',
                    GDP: '4346734000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1985',
                    GDP: '1400714806812.65'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1985',
                    GDP: '555197109067.017'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1985',
                    GDP: '489285164271.047'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1985',
                    GDP: '450725816042.998'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1985',
                    GDP: '364756499450.751'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1985',
                    GDP: '309488028132.653'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1985',
                    GDP: '229410293755.209'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1985',
                    GDP: '222942790435.299'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1985',
                    GDP: '180470967247.066'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1986',
                    GDP: '4590155000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1986',
                    GDP: '2075034242192.31'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1986',
                    GDP: '774556302680.178'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1986',
                    GDP: '638273986102.091'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1986',
                    GDP: '601452653180.885'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1986',
                    GDP: '377437927311.983'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1986',
                    GDP: '300758100107.246'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1986',
                    GDP: '268137224729.722'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1986',
                    GDP: '245664654064.834'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1986',
                    GDP: '182281757134.863'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1987',
                    GDP: '4870217000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1987',
                    GDP: '2514283894261.86'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1987',
                    GDP: '938368438284.405'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1987',
                    GDP: '803055418882.581'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1987',
                    GDP: '745162608269.325'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1987',
                    GDP: '431316742081.448'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1987',
                    GDP: '294084112392.66'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1987',
                    GDP: '275311425330.609'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1987',
                    GDP: '272972974764.574'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1987',
                    GDP: '189375992588.671'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1988',
                    GDP: '5252629000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1988',
                    GDP: '3050637784817.52'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1988',
                    GDP: '1023504019381.13'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1988',
                    GDP: '910122732123.799'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1988',
                    GDP: '888667913418.625'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1988',
                    GDP: '507354351182.254'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1988',
                    GDP: '330397381998.489'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1988',
                    GDP: '312353631207.819'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1988',
                    GDP: '292632656261.441'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1988',
                    GDP: '236135768335.274'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1989',
                    GDP: '5657693000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1989',
                    GDP: '3052315661954.82'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1989',
                    GDP: '1030122352457.33'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1989',
                    GDP: '926884816753.927'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1989',
                    GDP: '925598068021.451'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1989',
                    GDP: '565055743243.243'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1989',
                    GDP: '425595310000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1989',
                    GDP: '347768051311.741'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1989',
                    GDP: '299941372852.374'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1989',
                    GDP: '292093308316.929'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1990',
                    GDP: '5979589000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1990',
                    GDP: '3139974443543'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1990',
                    GDP: '1275300566196.84'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1990',
                    GDP: '1177326294440.85'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1990',
                    GDP: '1093169389204.55'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1990',
                    GDP: '593929550908.468'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1990',
                    GDP: '461951782000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1990',
                    GDP: '360857912565.966'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1990',
                    GDP: '316697337894.532'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1990',
                    GDP: '311425933051.174'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1991',
                    GDP: '6174043000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1991',
                    GDP: '3578139437172.02'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1991',
                    GDP: '1275563306592.26'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1991',
                    GDP: '1242109397533.95'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1991',
                    GDP: '1142797178130.51'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1991',
                    GDP: '610328183643.188'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1991',
                    GDP: '602860000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1991',
                    GDP: '383373318083.624'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1991',
                    GDP: '326068597441.331'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1991',
                    GDP: '266502281092.721'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1992',
                    GDP: '6539299000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1992',
                    GDP: '3897826229662.86'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1992',
                    GDP: '1408724907063.2'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1992',
                    GDP: '1315806985860.17'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1992',
                    GDP: '1179659529659.53'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1992',
                    GDP: '592387689252.916'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1992',
                    GDP: '426915712711.146'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1992',
                    GDP: '400599250000'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1992',
                    GDP: '325692532492.502'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1992',
                    GDP: '284363884079.92'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1993',
                    GDP: '6878718000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1993',
                    GDP: '4466565327401.26'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1993',
                    GDP: '1330094973361.13'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1993',
                    GDP: '1061445225790.57'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1993',
                    GDP: '1061388722255.55'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1993',
                    GDP: '577170761956.438'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1993',
                    GDP: '444731282436.762'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1993',
                    GDP: '437798577639.752'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1993',
                    GDP: '312372821810.006'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1993',
                    GDP: '275570363432.31'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1994',
                    GDP: '7308755000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1994',
                    GDP: '4907039384469.68'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1994',
                    GDP: '1401636342155.01'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1994',
                    GDP: '1140489745944.29'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1994',
                    GDP: '1095590833693.56'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1994',
                    GDP: '578139279437.61'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1994',
                    GDP: '564324670005.917'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1994',
                    GDP: '558111997497.263'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1994',
                    GDP: '323216879972.328'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1994',
                    GDP: '322909902308.131'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1995',
                    GDP: '7664060000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1995',
                    GDP: '5449116304981.1'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1995',
                    GDP: '1609892232882.11'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1995',
                    GDP: '1335218557677.13'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1995',
                    GDP: '1170787352906.22'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1995',
                    GDP: '785643456467.255'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1995',
                    GDP: '734547898220.508'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1995',
                    GDP: '604031623433.401'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1995',
                    GDP: '368391743391.743'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1995',
                    GDP: '355475984176.175'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1996',
                    GDP: '8100201000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1996',
                    GDP: '4833712542207.1'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1996',
                    GDP: '1614245416078.98'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1996',
                    GDP: '1408781591263.65'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1996',
                    GDP: '1308929351236.04'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1996',
                    GDP: '863746717503.789'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1996',
                    GDP: '850425828275.793'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1996',
                    GDP: '628546387972.131'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1996',
                    GDP: '401819423368.74'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1996',
                    GDP: '387656017799.599'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1997',
                    GDP: '8608515000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1997',
                    GDP: '4414732843544.43'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1997',
                    GDP: '1552483628028.81'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1997',
                    GDP: '1460709148123.17'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1997',
                    GDP: '1239050932241.93'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1997',
                    GDP: '961603952951.82'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1997',
                    GDP: '883199443413.729'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1997',
                    GDP: '652825364726.275'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1997',
                    GDP: '436097980904.68'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1997',
                    GDP: '410320300471.227'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1998',
                    GDP: '9089168000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1998',
                    GDP: '4032509760872.94'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1998',
                    GDP: '1638511096389.53'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1998',
                    GDP: '1510758283299.98'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1998',
                    GDP: '1266309245009.48'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1998',
                    GDP: '1029043097554.08'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1998',
                    GDP: '863723395088.324'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1998',
                    GDP: '631813279406.808'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1998',
                    GDP: '415730874172.06'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1998',
                    GDP: '399778878111.646'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '1999',
                    GDP: '9660624000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '1999',
                    GDP: '4562078822335.45'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '1999',
                    GDP: '1665623685487.79'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '1999',
                    GDP: '1500275942893.67'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '1999',
                    GDP: '1248563179203.07'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '1999',
                    GDP: '1093997267271.06'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '1999',
                    GDP: '676082654640.91'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '1999',
                    GDP: '599388879704.634'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '1999',
                    GDP: '452699998386.955'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '1999',
                    GDP: '389146509587.668'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2000',
                    GDP: '10284779000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2000',
                    GDP: '4887519660744.86'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2000',
                    GDP: '1647951278559.54'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2000',
                    GDP: '1368438363736.87'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2000',
                    GDP: '1211346869605.24'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2000',
                    GDP: '1141759996314.72'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2000',
                    GDP: '742293448252.643'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2000',
                    GDP: '655421153320.579'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2000',
                    GDP: '462146799336.77'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2000',
                    GDP: '415446209885.072'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2001',
                    GDP: '10621824000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2001',
                    GDP: '4303544259842.72'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2001',
                    GDP: '1621510004318.41'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2001',
                    GDP: '1382218344519.02'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2001',
                    GDP: '1339395718865.3'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2001',
                    GDP: '1162317852348.99'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2001',
                    GDP: '736379777892.562'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2001',
                    GDP: '559372502338.237'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2001',
                    GDP: '478965491061.694'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2001',
                    GDP: '378899860470.108'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2002',
                    GDP: '10977514000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2002',
                    GDP: '4115116279069.77'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2002',
                    GDP: '1768408273381.29'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2002',
                    GDP: '1500337850555.24'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2002',
                    GDP: '1470550015081.55'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2002',
                    GDP: '1266510634293.24'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2002',
                    GDP: '757950678646.53'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2002',
                    GDP: '508068952065.959'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2002',
                    GDP: '507962741819.919'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2002',
                    GDP: '394635830891.586'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2003',
                    GDP: '11510670000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2003',
                    GDP: '4445658071221.86'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2003',
                    GDP: '2038395102040.82'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2003',
                    GDP: '1848124153498.87'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2003',
                    GDP: '1660287965662.68'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2003',
                    GDP: '1569649661399.55'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2003',
                    GDP: '892380986367.854'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2003',
                    GDP: '599592902016.212'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2003',
                    GDP: '558320116997.075'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2003',
                    GDP: '466853232382.062'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2004',
                    GDP: '12274928000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2004',
                    GDP: '4815148854362.11'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2004',
                    GDP: '2398555474185.28'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2004',
                    GDP: '2124112242364.04'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2004',
                    GDP: '1955347004963.27'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2004',
                    GDP: '1798314750434.57'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2004',
                    GDP: '1023196003074.56'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2004',
                    GDP: '699688852930.441'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2004',
                    GDP: '669316239316.239'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2004',
                    GDP: '613329776639.636'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2005',
                    GDP: '13093726000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2005',
                    GDP: '4755410630912.14'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2005',
                    GDP: '2520701818181.82'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2005',
                    GDP: '2285965892360.54'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2005',
                    GDP: '2203678646934.46'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2005',
                    GDP: '1852661982340.5'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2005',
                    GDP: '1169357979864.66'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2005',
                    GDP: '891629970423.924'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2005',
                    GDP: '808901077222.092'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2005',
                    GDP: '693764095624.718'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2006',
                    GDP: '13855888000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2006',
                    GDP: '4530377224970.4'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2006',
                    GDP: '2752131773355.16'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2006',
                    GDP: '2692612695492.18'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2006',
                    GDP: '2325011918203.49'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2006',
                    GDP: '1942633797516'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2006',
                    GDP: '1315415197461.21'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2006',
                    GDP: '1107640325472.35'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2006',
                    GDP: '920316529729.61'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2006',
                    GDP: '747572626534.891'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2007',
                    GDP: '14477635000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2007',
                    GDP: '4515264514430.57'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2007',
                    GDP: '3552182311652.97'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2007',
                    GDP: '3074359743897.56'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2007',
                    GDP: '2663112510265.54'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2007',
                    GDP: '2203053380782.92'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2007',
                    GDP: '1464977190205.75'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2007',
                    GDP: '1397084381901.29'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2007',
                    GDP: '1201111768409.39'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2007',
                    GDP: '853764622752.61'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2008',
                    GDP: '14718582000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2008',
                    GDP: '5037908465114.48'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2008',
                    GDP: '4598206091384'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2008',
                    GDP: '2923465651091.26'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2008',
                    GDP: '2890564338235.29'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2008',
                    GDP: '2390729163615.06'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2008',
                    GDP: '1695824517395.57'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2008',
                    GDP: '1549131208997.19'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2008',
                    GDP: '1186952757635.85'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2008',
                    GDP: '1055334825425.25'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2009',
                    GDP: '14418739000000'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2009',
                    GDP: '5231382674593.7'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2009',
                    GDP: '5109953609257.25'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2009',
                    GDP: '2693827452070.02'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2009',
                    GDP: '2382825985355.97'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2009',
                    GDP: '2185160183384.27'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2009',
                    GDP: '1667019605881.76'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2009',
                    GDP: '1371153004986.44'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2009',
                    GDP: '1323940295874.9'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2009',
                    GDP: '927168310999.853'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2010',
                    GDP: '14964372000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2010',
                    GDP: '6100620488867.55'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2010',
                    GDP: '5700098114744.41'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2010',
                    GDP: '2646837111794.78'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2010',
                    GDP: '2441173394729.62'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2010',
                    GDP: '2208871646202.82'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2010',
                    GDP: '2125058244242.92'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2010',
                    GDP: '1656617073124.21'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2010',
                    GDP: '1613464422811.13'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2010',
                    GDP: '1142876772659.21'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2011',
                    GDP: '15517926000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2011',
                    GDP: '7572553836875.34'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2011',
                    GDP: '6157459594823.72'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2011',
                    GDP: '2862680142625.14'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2011',
                    GDP: '2619700404733.37'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2011',
                    GDP: '2616201578192.25'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2011',
                    GDP: '2276292404600.52'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2011',
                    GDP: '1823049927771.46'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2011',
                    GDP: '1788647906047.76'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2011',
                    GDP: '1390557034407.97'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2012',
                    GDP: '16155255000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2012',
                    GDP: '8560547314679.28'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2012',
                    GDP: '6203213121334.12'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2012',
                    GDP: '2681416108537.39'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2012',
                    GDP: '2662085168498.93'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2012',
                    GDP: '2465188674415.03'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2012',
                    GDP: '2072823157059.76'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2012',
                    GDP: '1827637859135.7'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2012',
                    GDP: '1824288757447.57'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2012',
                    GDP: '1538194473087.23'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2013',
                    GDP: '16691517000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2013',
                    GDP: '9607224481532.65'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2013',
                    GDP: '5155717056270.83'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2013',
                    GDP: '2808511203185.39'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2013',
                    GDP: '2739818680930.19'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2013',
                    GDP: '2472806919901.67'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2013',
                    GDP: '2130491320658.68'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2013',
                    GDP: '1856722121394.53'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2013',
                    GDP: '1842628005830.18'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2013',
                    GDP: '1567178619062.28'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2014',
                    GDP: '17393103000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2014',
                    GDP: '10482372109961.9'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2014',
                    GDP: '4848733415523.53'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2014',
                    GDP: '3022827781881.39'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2014',
                    GDP: '2849305322684.76'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2014',
                    GDP: '2455993200170'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2014',
                    GDP: '2151732868243.21'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2014',
                    GDP: '2035393459979.46'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2014',
                    GDP: '1792883225804.38'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2014',
                    GDP: '1459597906912.7'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2015',
                    GDP: '18120714000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2015',
                    GDP: '11064666282625.5'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2015',
                    GDP: '4383076298081.86'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2015',
                    GDP: '2885570309160.86'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2015',
                    GDP: '2433562015516.21'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2015',
                    GDP: '2089865410867.82'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2015',
                    GDP: '1832347450961.51'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2015',
                    GDP: '1803652649613.75'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2015',
                    GDP: '1552807652015.37'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2015',
                    GDP: '1345383143356.35'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          },
          {
            data: [
              {
                id: 'id',
                values: [
                  {
                    'Country Name': 'United States',
                    'Country Name CN': '美国',
                    'Country Code': 'USA',
                    Year: '2016',
                    GDP: '18624475000000'
                  },
                  {
                    'Country Name': 'China',
                    'Country Name CN': '中国',
                    'Country Code': 'CHN',
                    Year: '2016',
                    GDP: '11199145157649.2'
                  },
                  {
                    'Country Name': 'Japan',
                    'Country Name CN': '日本',
                    'Country Code': 'JPN',
                    Year: '2016',
                    GDP: '4940158776617.16'
                  },
                  {
                    'Country Name': 'United Kingdom',
                    'Country Name CN': '英国',
                    'Country Code': 'GBR',
                    Year: '2016',
                    GDP: '2647898654635.24'
                  },
                  {
                    'Country Name': 'France',
                    'Country Name CN': '法国',
                    'Country Code': 'FRA',
                    Year: '2016',
                    GDP: '2465453975282.24'
                  },
                  {
                    'Country Name': 'India',
                    'Country Name CN': '印度',
                    'Country Code': 'IND',
                    Year: '2016',
                    GDP: '2263792499341.01'
                  },
                  {
                    'Country Name': 'Italy',
                    'Country Name CN': '意大利',
                    'Country Code': 'ITA',
                    Year: '2016',
                    GDP: '1858913163927.72'
                  },
                  {
                    'Country Name': 'Brazil',
                    'Country Name CN': '巴西',
                    'Country Code': 'BRA',
                    Year: '2016',
                    GDP: '1796186586414.45'
                  },
                  {
                    'Country Name': 'Canada',
                    'Country Name CN': '加拿大',
                    'Country Code': 'CAN',
                    Year: '2016',
                    GDP: '1529760492201.35'
                  },
                  {
                    'Country Name': 'Australia',
                    'Country Name CN': '澳大利亚',
                    'Country Code': 'AUS',
                    Year: '2016',
                    GDP: '1204616439828.41'
                  }
                ],
                fields: {
                  'Country Name CN': {
                    sortIndex: 0,
                    domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国']
                  }
                }
              }
            ]
          }
        ],
        slider: {
          railStyle: {
            visible: false
          },
          trackStyle: {
            visible: false
          },
          handlerStyle: {
            visible: false
          }
        },
        controller: {
          backward: {
            style: {
              visible: false
            }
          },
          forward: {
            style: {
              visible: false
            }
          },
          start: {
            style: {
              visible: false
            }
          },
          pause: {
            style: {
              visible: false
            }
          }
        }
      },
      animationAppear: {
        duration: 300
      },
      color: {
        domain: ['巴西', '澳大利亚', '印度', '意大利', '加拿大', '日本', '中国', '法国', '英国', '美国'],
        range: [
          '#FF006E',
          '#0AC5EF',
          '#8338EC',
          '#FFBE0C',
          '#FF3C3C',
          '#77FF60',
          '#F0337F',
          '#6741B1',
          '#15FFAB',
          '#DB03F2'
        ]
      },
      seriesField: 'Country Name CN',
      background: 'transparent'
    };

    const chartSpace = new window.ChartSpace.default(spec, { dom: 'container' });

    chartSpace.renderSync();
    console.log(chartSpace);

    // window.BUGSERVER_SCREENSHOT();
    // window.BUGSERVER_RELEASE(() => {
    //   chartSpace.release();
    // });
  });
  return;
  const graphics: IGraphic[] = [];
  const startAngle = pi + pi / 20;
  const endAngle = pi2 - pi / 20;
  const delatAngle = endAngle - startAngle;
  const outerRadius = 200;
  const innerRadius = 80;
  const x = 300;
  const y = 300;

  const rectW = 5;
  const _startAngle = startAngle + (rectW / (2 * pi * outerRadius)) * pi * 2;
  const _endAngle = endAngle - (rectW / (2 * pi * outerRadius)) * pi * 2 * 2;
  const _deltaAngle = _endAngle - startAngle;
  const _x = x - rectW / 2;
  const _y = y;
  for (let i = 0; i <= 7; i++) {
    const rect = createRect({
      x: _x,
      y: _y,
      width: rectW,
      height: innerRadius,
      angle: _startAngle + (_deltaAngle / 7) * i - pi / 2,
      anchor: [_x + rectW / 2, _y],
      fill: 'brown'
    });
    graphics.push(rect);
  }
  const ba = createArc({
    startAngle: pi + pi / 20,
    endAngle: pi2 - pi / 20,
    x: 300,
    y: 300,
    outerRadius,
    innerRadius,
    // fill: 'green',
    background:
      'data:image/png;base64,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'
    // texture: 'vertical-line',
    // texturePadding: 3,
    // textureSize: 3,
    // textureColor: 'red',
  });
  graphics.push(ba);

  for (let i = 1; i < 8; i++) {
    const da = delatAngle / 23;
    const arc = createArc({
      startAngle: startAngle + (delatAngle / 8) * i - da / 2,
      endAngle: startAngle + (delatAngle / 8) * i + da / 2,
      x,
      y,
      outerRadius,
      innerRadius,
      fill: '#e9e9e977'
    });
    graphics.push(arc);
  }

  const zgj = createGlyph({
    x,
    y
  });
  const s1 = createSymbol({
    symbolType:
      'M -73.8954 505.6538 a 70.4 70.4 0 0 1 -49.9507 -20.6541 c -27.52 -27.5507 -27.52 -72.3405 0 -99.8605 l 24.9651 -24.9805 l -49.9302 -49.9354 l -24.9651 24.9651 c -27.5712 27.5712 -72.3456 27.5405 -99.881 0 c -27.52 -27.5456 -27.52 -72.3405 0 -99.8605 c 27.5354 -27.5354 72.3098 -27.5661 99.881 0 l 24.9651 24.9651 l 49.9302 -49.9302 l -24.9651 -24.9805 c -27.5354 -27.5354 -27.5354 -72.3251 0 -99.8605 c 27.5354 -27.5251 72.3149 -27.5405 99.881 0 L 1 110.4819 l 24.9651 -24.9651 c 27.5712 -27.5405 72.3456 -27.5251 99.881 0 c 27.5354 27.5354 27.5354 72.3251 0 99.8605 l -24.9651 24.9805 l 49.9302 49.9302 l 24.9702 -24.9651 c 27.5661 -27.5661 72.3405 -27.5354 99.881 0 c 27.5149 27.52 27.5149 72.3149 0 99.8656 c -27.52 27.5507 -72.3302 27.5507 -99.881 0 l -24.9702 -24.9651 l -49.9302 49.9302 l 24.9651 24.9805 c 27.52 27.52 27.52 72.3149 0 99.8656 c -27.5149 27.5507 -72.3251 27.5507 -99.881 0 L 1 460.0346 l -24.9651 24.9651 a 70.4 70.4 0 0 1 -49.9302 20.6541 z m 0 -120.5146 l -24.9805 24.9651 c -13.7574 13.7574 -13.7574 36.1574 0 49.9302 c 13.8086 13.7728 36.2035 13.7472 49.9456 0 l 24.9651 -24.9651 l -49.9302 -49.9302 z m 99.8605 49.9302 l 24.9651 24.9651 c 13.7626 13.7728 36.1882 13.7472 49.9507 0 c 13.7626 -13.7728 13.7626 -36.1728 0 -49.9302 l -24.9805 -24.9651 l -49.9354 49.9302 z m -74.8954 -74.9158 L 1 410.0992 l 49.9302 -49.9456 L 1 310.2234 l -49.9302 49.9302 z m 74.8954 -74.8954 l 49.9302 49.9302 l 49.9507 -49.9302 l -49.9507 -49.9302 l -49.9302 49.9302 z m -149.8112 0 l 49.9456 49.9302 l 49.9302 -49.9302 l -49.9302 -49.9302 l -49.9456 49.9302 z m 299.6224 0 l 24.9651 24.9651 c 13.7267 13.7472 36.1626 13.7626 49.9507 0 c 13.7626 -13.7728 13.7626 -36.1728 0 -49.9302 c -13.7728 -13.7779 -36.2035 -13.7421 -49.9507 0 l -24.9651 24.9651 z m -424.4685 24.9651 c 13.8086 13.7626 36.2086 13.7626 49.9456 0 l 24.9651 -24.9651 l -24.9651 -24.9651 c -13.7574 -13.7626 -36.1882 -13.7779 -49.9456 0 c -13.7574 13.7574 -13.7574 36.1523 0 49.9302 z m 199.7619 -99.8605 L 1 260.2931 l 49.9302 -49.9302 L 1 160.4173 l -49.9302 49.9456 z m 74.8954 -74.9158 l 49.9302 49.9302 l 24.9856 -24.9651 c 13.7574 -13.7626 13.7574 -36.1728 0 -49.9302 c -13.7626 -13.7779 -36.1882 -13.8035 -49.9507 0 l -24.9651 24.9651 z m -99.8605 -35.2922 a 35.1744 35.1744 0 0 0 -24.9805 10.3322 c -13.7574 13.7574 -13.7574 36.1728 0 49.9302 l 24.9805 24.9651 l 49.9302 -49.9354 l -24.9651 -24.9651 a 35.2 35.2 0 0 0 -24.9651 -10.327 z',
    size: 60,
    dy: -30,
    fill: '#ff4c4c'
  });
  const s2 = createSymbol({
    symbolType: 'circle',
    size: 15,
    dy: 25,
    fill: 'red'
  });
  const s3 = createSymbol({
    symbolType:
      'M 2.2406 156.12 h -2.3962 l 0.2509 -157.7626 H 2 z M 7.033 156.12 h -2.3962 l -0.0768 -157.7626 h 1.9098 z M 11.8253 156.12 h -2.3962 l 0.0461 -157.7626 h 1.9098 z M 16.6176 156.12 h -2.391 l -0.2266 -158.12 h 1.9098 z M -2.5568 156.12 h -2.391 l 0.1229 -157.7626 h 1.9098 z M -7.3491 156.12 h -2.3962 l -0.2547 -158.12 h 2 z M -12.1414 156.12 h -2.3962 l -0.4624 -158.12 h 2 z',
    size: 30,
    scaleY: 1.5,
    dy: 30,
    fill: '#ff4c4c'
  });
  zgj.setSubGraphic([s1, s2, s3]);
  graphics.push(zgj);
  // graphics.push(createArc({
  //   innerRadius: 60,
  //   outerRadius: 137.8,
  //   startAngle: -1.5707963267948966,
  //   endAngle: -0.3141592653589793,
  //   x: 100,
  //   y: 200,
  //   cornerRadius: 6,
  //   stroke: 'green',
  //   lineWidth: 2,
  //   cap: false
  // }));

  // graphics.push(createArc({
  //   innerRadius: 60,
  //   outerRadius: 137.8,
  //   startAngle: 0,
  //   endAngle: Math.PI * 2,
  //   x: 500,
  //   y: 200,
  //   fill: {
  //     gradient: 'linear',
  //     x0: 0,
  //     y0: 0,
  //     x1: 1,
  //     y1: 0,
  //     stops: [
  //       { offset: 0, color: 'green' },
  //       { offset: 0.5, color: 'orange' },
  //       { offset: 1, color: 'red' }
  //     ]
  //   },
  //   fillOpacity: 0.3,
  //   background:
  //     '<svg t="1683876749384" class="icon" viewBox="0 0 1059 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5625" width="200" height="200"><path d="M928.662069 17.655172h-812.137931v208.331035h812.137931z" fill="#F1543F" p-id="5626"></path><path d="M1020.468966 275.42069l-236.579311 367.227586c0-17.655172-3.531034-35.310345-14.124138-49.434483-17.655172-24.717241-56.496552-28.248276-81.213793-45.903448-21.186207-14.124138-35.310345-42.372414-60.027586-56.496552L928.662069 17.655172l24.717241 14.124138c88.275862 49.434483 116.524138 158.896552 67.089656 243.64138M416.662069 490.813793c-21.186207 14.124138-38.841379 42.372414-60.027586 56.496552-24.717241 17.655172-63.558621 24.717241-81.213793 45.903448-10.593103 14.124138-10.593103 31.77931-14.124138 49.434483L24.717241 275.42069C-24.717241 190.675862 3.531034 81.213793 91.806897 31.77931l24.717241-14.124138 300.137931 473.158621z" fill="#FF7058" p-id="5627"></path><path d="M893.351724 656.772414c0 38.841379-35.310345 70.62069-45.903448 102.4-10.593103 35.310345-3.531034 81.213793-24.717242 109.462069-21.186207 28.248276-67.089655 35.310345-98.868965 56.496551-31.77931 28.248276-52.965517 70.62069-88.275862 81.213794-35.310345 10.593103-77.682759-10.593103-112.993104-10.593104-38.841379 0-81.213793 21.186207-116.524137 10.593104S349.572414 953.37931 317.793103 932.193103c-31.77931-21.186207-77.682759-28.248276-98.868965-56.496551-21.186207-28.248276-14.124138-74.151724-24.717241-109.462069-10.593103-35.310345-45.903448-67.089655-45.903449-102.4 0-38.841379 35.310345-70.62069 45.903449-105.931035 10.593103-35.310345 3.531034-81.213793 24.717241-109.462069 21.186207-28.248276 67.089655-35.310345 98.868965-56.496551 28.248276-21.186207 49.434483-63.558621 88.275863-74.151725 35.310345-10.593103 77.682759 10.593103 116.524137 10.593104 38.841379 0 81.213793-21.186207 112.993104-10.593104 35.310345 10.593103 56.496552 52.965517 88.275862 74.151725 31.77931 21.186207 77.682759 28.248276 98.868965 56.496551 21.186207 28.248276 14.124138 74.151724 24.717242 109.462069 10.593103 31.77931 45.903448 63.558621 45.903448 98.868966" fill="#F8B64C" p-id="5628"></path><path d="M790.951724 656.772414c0 144.772414-120.055172 264.827586-268.358621 264.827586-148.303448 0-268.358621-120.055172-268.35862-264.827586s120.055172-264.827586 268.35862-264.827586c148.303448 0 268.358621 120.055172 268.358621 264.827586" fill="#FFD15C" p-id="5629"></path><path d="M706.206897 589.682759h-123.586207c-7.062069 0-10.593103-3.531034-14.124138-10.593104L529.655172 466.096552c-3.531034-14.124138-21.186207-14.124138-28.248275 0l-38.84138 112.993103c-3.531034 7.062069-7.062069 10.593103-14.124138 10.593104H335.448276c-14.124138 0-21.186207 17.655172-7.062069 24.717241l98.868965 70.62069c3.531034 3.531034 7.062069 10.593103 3.531035 14.124138L391.944828 812.137931c-3.531034 14.124138 10.593103 24.717241 21.186206 14.124138l98.868966-70.62069c3.531034-3.531034 10.593103-3.531034 17.655172 0l98.868966 70.62069c10.593103 7.062069 24.717241-3.531034 21.186207-14.124138l-38.841379-112.993103c-3.531034-7.062069 0-10.593103 3.531034-14.124138l98.868966-70.62069c14.124138-7.062069 7.062069-24.717241-7.062069-24.717241" fill="#F8B64C" p-id="5630"></path></svg>',
  //   texture: 'circle',
  //   textureColor: 'orange',
  //   stroke: 'green',
  //   lineWidth: 2,
  //   cap: false
  // }));

  graphics.length = 0;
  graphics.push(
    createArc({
      innerRadius: 60,
      outerRadius: 137.8,
      startAngle: 0,
      endAngle: Math.PI,
      x: 200,
      y: 500,
      stroke: [false, 'green', false, 'green'],
      outerBorder: {
        stroke: ['red', false, false, false],
        distance: 30,
        lineWidth: 10
      },
      lineWidth: 5,
      fill: {
        x: 0.5,
        y: 0.5,
        startAngle: 0,
        endAngle: 6.283185307179586,
        stops: [
          { offset: 0, color: 'red' },
          { offset: 0.2, color: 'blue' },
          { offset: 0.4, color: 'orange' },
          { offset: 0.6, color: 'pink' },
          { offset: 0.8, color: 'green' },
          { offset: 1, color: 'purple' }
        ],
        gradient: 'conical'
      },
      // cap: [true, true],
      // cornerRadius: 26,
      forceShowCap: true
    })
  );

  const stage = createStage({
    canvas: 'main',
    autoRender: true,
    poptip: true
  });

  const layer = stage.createLayer(null, 'virtual');
  const t = createText({
    text: '这是第二个图层',
    x: 100,
    y: 100,
    fill: 'red'
  });
  layer.add(t);
  // t.animate().to({ y: 300 }, 1000, 'linear');
  graphics.forEach(g => {
    stage.defaultLayer.add(g);
  });
};
