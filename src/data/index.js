
import I18n from 'i18n'

export const mainCategory = [
  {key: 'mc1', title: I18n.t('carOwnerVoice'), icon: require('assets/images/mainCategoryIcons/carOwnerVoice.png'), color: '#d52'},
  {key: 'mc2', title: I18n.t('focus'), icon: require('assets/images/mainCategoryIcons/industryNews.png'), color: '#25d'},
  {key: 'mc3', title: I18n.t('accessoriesMarket'), icon: require('assets/images/mainCategoryIcons/accessoriesMarket.png'), color: '#a05'},
  {key: 'mc4', title: I18n.t('technicianConsultation'), icon: require('assets/images/mainCategoryIcons/technicianConsultation.png'), color: '#a50'},
  {key: 'mc5', title: I18n.t('emergencyBook'), icon: require('assets/images/mainCategoryIcons/driverTips.png'), color: '#05a'},
  {key: 'mc6', title: I18n.t('maintenance'), icon: require('assets/images/mainCategoryIcons/maintenance.png'), color: '#5a0'},
  {key: 'mc7', title: I18n.t('beautyCarWash'), icon: require('assets/images/mainCategoryIcons/beautyCarWash.png'), color: '#25d'},
  {key: 'mc8', title: I18n.t('modificationUpgrade'), icon: require('assets/images/mainCategoryIcons/modificationUpgrade.png'), color: '#50a'},
  {key: 'mc9', title: I18n.t('motorizedCar'), icon: require('assets/images/mainCategoryIcons/motorizedElectricCar.png'), color: '#25a'},
  {key: 'mc10', title: I18n.t('expertInterview'), icon: require('assets/images/mainCategoryIcons/expertInterview.png'), color: '#0a5'},
]

export const industryNewsCategory = [
  {key: 'ic1', title: I18n.t('maintenance'), icon: require('assets/images/mainCategoryIcons/maintenance.png'), color: '#aa5'},
  {key: 'ic2', title: I18n.t('beautyCarWash'), icon: require('assets/images/mainCategoryIcons/beautyCarWash.png'), color: '#a5a'},
  {key: 'ic3', title: I18n.t('modificationUpgrade'), icon: require('assets/images/mainCategoryIcons/modificationUpgrade.png'), color: '#5aa'},
  {key: 'ic4', title: I18n.t('accessoriesFactory'), icon: require('assets/images/mainCategoryIcons/accessoriesFactory.png'), color: '#55a'},
]

export const industryNews = [
  {
    key: 'in1', title: I18n.t('news1Title'), images: [
      require('assets/images/industryNews/industryNews1_1.png'),
      require('assets/images/industryNews/industryNews1_2.png'),
      require('assets/images/industryNews/industryNews1_3.png'),
    ],
    rating: 15, author: "和静",
    content: 
    `虽然电动汽车已经存在了一百多年，但它从来没有像现在这样受欢迎。在这里，我们来看看2019年电动汽车行业可能存在的情况
        电动汽车的简史
        电动汽车的第一个概念是由荷兰，匈牙利和美国的创新者在19世纪发明的。到1901年，托马斯爱迪生致力于为车辆开发更好的电池，从而创造出第一辆混合动力电动汽车。随着1920年原油价格下跌，电动汽车普及率下降，汽油和柴油车型控制了汽车市场。
        
        电动汽车如何改进？
        毫无疑问，电动汽车多年来已经有了很大的改进。英国的道路上目前有超过15万辆电动汽车，自2011年以来，快速充电连接器的数量大幅增加，包括推出CCS，特斯拉和Type2连接器。
        
        虽然英国的平均行程是15英里，但电动汽车总是带来了从上面提到的充电器中分解或用尽“果汁”的焦虑。也许在过去，他们只能短距离，但目前，您可以预期完全充电，让您在200英里的范围内旅行。更好的是，96％的高速公路服务站可以提供快速充电点，这将在30分钟内提供100％电动汽车80％的电力。
        
        汽车经销商，Lookers，在他们与慈善机构BEN合作并驾驶电动汽车从都柏林到苏格兰然后到英格兰底部的伊斯特本时，对汽车进行了测试。当然，如果没有增强车辆和充电点，这是不可能的。
        
        电动汽车的未来
        当然可以说近年来电动汽车的重新崛起将继续下去。一个主要原因是英国政府预计到2040年将停止销售新的汽油和柴油车型。它还承诺，到2030年，至少有一半的新车将采用混合动力或电动车，以减少车辆排放。
        
        许多公司也试图通过增加他们的EV充电器装置来领先于游戏。配电网络运营商Northern Powergrid是一家公司的一个积极例子，该公司寻求“动手”，作为其准备增加电动汽车以及相关需求的更多连接和EV充电点的一部分。它正在11个自己的工厂引入新的充电点，以鼓励员工在2040年新柴油和汽油车销售禁令之前充分发挥电力。
        
        该公司负责政策制定的负责人吉姆卡德威尔说：“我们必须亲自动手并以身作则。” “尽管同事们经常不得不把我们的车辆带到没有电的地方，但是尽可能快地将我们的车队尽可能多地脱碳以满足其内部的需求。”
        
        Northern Powergrid还参与了先进的电动汽车项目，旨在帮助英国交通系统在低碳未来发挥积极作用。其中包括由商业，能源和工业战略部（BEIS）宣布并由日产牵头的980万英镑合作项目，该项目将在英国网络中增加1,000个V2G充电点。它还与日产公司签署了行业领先的谅解备忘录，以开展项目，研究电动汽车，电池和其他技术如何支持能源网络，并支持希望将电动汽车连接到其网络的客户。
        
        日产的电动车经理埃德琼斯说：“我们一直都知道，日产的电动汽车技术不仅可以用于从A到B的人员，我们很高兴能够分享我们的专业知识，以帮助创造更多英国的可持续能源网络。通过日产电动汽车的整合，我们可以找到新的解决方案，帮助塑造一个能源使用可持续，高效且价格合理的社会。“
        
        这样的举措支持了更容易找到充电点的动力。有三种类型的充电可供选择：快速，快速和慢速。在整个英国，我们注意到能够为电动汽车充电的地点不断增加。 2018年11月，增加了596个港口，这个数字只会在未来几年内上升。
        
        很明显，在不久的将来电动汽车行业将会有很多重要的事情，这只会是一件好事。随着公司现在加入变革，公众接受模型，电动汽车行业肯定正朝着正确的方向发展。`
  },
  {
    key: 'in2', title: I18n.t('news2Title'), images: [
      require('assets/images/industryNews/industryNews2_1.png'),
      require('assets/images/industryNews/industryNews2_2.png'),
      require('assets/images/industryNews/industryNews2_3.png'),
    ],
    rating: 35, author: '小景',
    content: 
    `如果要实现电动汽车的目标，政府需要更多的指导和支持
        2018年5月29日
        混合动力的猜测导致进一步的混乱和新的充电点需要至少翻两番才能满足电动汽车销售的需求。高力国际强调了在首届汽车观点上实现政府目标的主要障碍
        此外，最近有人猜测迈克尔戈夫还将包括禁止销售新型混合动力汽车，以及到2040年的汽油和柴油，高力国际表示，这只会在市场上造成更多的混乱和不确定性，买家信心被不必要地驱逐。
        
        高力汽车和路边负责人约翰罗伯茨评论说：“英国政府最近的立法已拨出资金，支持地方当局建立必要的充电基础设施，这是受欢迎的。然而，市场仍然处于起步阶段，其中一些举措可能会引起一些消费者的困惑。
        
        “政府的计划显然受到欢迎，对于该行业的发展极为重要，但柴油和汽油发动机直到2040年才被完全淘汰，所以在变化生效之前还有20多年的时间。要准备满足该行业未来需要的基础设施，还有很多工作要做。“
        
        他解释了家庭和“在移动中”充电点的总体供应不足，以及长时间充电时间的担忧导致买方信心不足以及现有和潜在电动汽车业主的“范围焦虑”。与此同时，对当前英国能源供应满足未来需求的能力的担忧以及缺乏对业主和开发商将充电点整合到商业场所的指导正在引起混淆。
        
        约翰继续说：“目前，英国有超过5,000个地点安装了公共充电点，这些地方有超过9,000台设备，提供15,000个连接器。虽然这些统计数据令人印象深刻，但短期内连接器和设备的数量至少需要翻两番才能满足电动汽车销量增长的需求。
        
        “如果你有街边停车，在家充电是好的。当然，我们很多人都没有。一些地方当局和伦敦自治市有选择地在灯柱上放置充电点。这是一项伟大的举措，但每辆车都是电动车时会发生什么？我们已经看到沿着人行道延伸20米的电缆，这既是一种安全风险，而且坦率地说，它可能会被肆意破坏。对于公寓的住宅开发商，是否应该要求每个停车位都安装充电点，或者可以随时改装？这是需要考虑的其他因素。“
        
        随着充电时间的改善，还需要更高水平的电力，但是，某些位置和特性无法提供所需的容量。
        
        高力的研究突显了“范围焦虑”，潜在的电动车车主担心车辆在到达目的地之前可能会耗尽电力 - 这是对电动车所有权的一个关键威慑 - 约翰补充说：
        
        “需要建造和创建更多的基础设施，特别是在现有的加油站和主干道路位置，以便为任何行驶适中的EV用户提供服务。壳牌和英国石油公司等石油公司已经开始在其加油站内安装和开放充电点，以满足不断增长的电动汽车需求。
        
        “在城镇和城市停车场，购物中心，零售公园，超市和新的公共'充电公园'的加油站增加充电点对于房东和开发商而言可能会对潜在的空间产生影响。装满汽油或柴油的车辆只需几分钟。目前，EV充电，即使使用增压器，也可能需要长达40分钟（重新充电80％）
        
        “英国政府需要全力支持房地产和汽油零售行业，以便将电动汽车转换为现实可行的目标。对充电基础设施的投资是一回事，但除此之外，确保英国能源供应满足未来需求激增是另一回事。还有很长的路要走。“`
  }
]

export const subCategory = [
  {key: 'sc1', title: I18n.t('dailyCheckIn'), icon: require('assets/images/subCategoryIcons/dailyCheckIn.png'), color: '#aa5'},
  {key: 'sc2', title: I18n.t('groupPurchasePromotion'), icon: require('assets/images/subCategoryIcons/groupPurchasePromotion.png'), color: '#5a5'},
  {key: 'sc3', title: I18n.t('storeRating'), icon: require('assets/images/subCategoryIcons/storeRating.png'), color: '#5aa'},
  {key: 'sc4', title: I18n.t('newStoreWelfare'), icon: require('assets/images/subCategoryIcons/newStoreWelfare.png'), color: '#55a'},
  {key: 'sc5', title: I18n.t('vipPrivileges'), icon: require('assets/images/subCategoryIcons/vipPrivileges.png'), color: '#5a5'}
]

export const recommendData = [
  {key: 'rd1', title: 'store'},
  {key: 'rd2', title: 'store'},
  {key: 'rd3', title: 'store'},
  {key: 'rd4', title: 'store'},
  {key: 'rd5', title: 'store'},
  {key: 'rd6', title: 'store'},
  {key: 'rd7', title: 'store'}
]

export const InquiryListData = [
  {key: 'il1', title: "维修询价 一", image: require('assets/images/inquiry/inquiry1.png'), price: '0.95', oldPrice: '3.00', recentSold: 0, popularity: 6},
  {key: 'il2', title: "维修询价 二", image: require('assets/images/inquiry/inquiry2.png'), price: '4.30', oldPrice: '8.00', recentSold: 2, popularity: 8},
  {key: 'il3', title: "维修询价 三", image: require('assets/images/inquiry/inquiry3.png'), price: '4.80', oldPrice: '8.00', recentSold: 1, popularity: 7},
  {key: 'il4', title: "维修询价 四", image: require('assets/images/inquiry/inquiry4.png'), price: '6.80', oldPrice: '12.00', recentSold: 5, popularity: 10},
  {key: 'il5', title: "维修询价 无", image: require('assets/images/inquiry/inquiry1.png'), price: '0.95', oldPrice: '3.00', recentSold: 0, popularity: 6},
  {key: 'il6', title: "维修询价 六", image: require('assets/images/inquiry/inquiry2.png'), price: '4.30', oldPrice: '8.00', recentSold: 2, popularity: 8},
  {key: 'il7', title: "维修询价 七", image: require('assets/images/inquiry/inquiry3.png'), price: '4.80', oldPrice: '8.00', recentSold: 1, popularity: 7},
  {key: 'il8', title: "维修询价 八", image: require('assets/images/inquiry/inquiry4.png'), price: '6.80', oldPrice: '12.00', recentSold: 5, popularity: 10},
  {key: 'il9', title: "维修询价 九", image: require('assets/images/inquiry/inquiry1.png'), price: '0.95', oldPrice: '3.00', recentSold: 0, popularity: 6},
  {key: 'il10', title: "维修询价 十", image: require('assets/images/inquiry/inquiry2.png'), price: '4.30', oldPrice: '8.00', recentSold: 2, popularity: 8},
  {key: 'il11', title: "维修询价 十一", image: require('assets/images/inquiry/inquiry3.png'), price: '4.80', oldPrice: '8.00', recentSold: 1, popularity: 7},
  {key: 'il12', title: "维修询价 十二", image: require('assets/images/inquiry/inquiry4.png'), price: '6.80', oldPrice: '12.00', recentSold: 5, popularity: 10},
]

export const maintenanceCategoryListData = [
  {
    key: 'rmc1',
    name: I18n.t('frame'),
    subCategories: [
      {
        key: 'rsc1_1',
        name: I18n.t('sheetMetal')
      },
      {
        key: 'rsc1_2',
        name: I18n.t('sprayPaint')
      },
      {
        key: 'rsc1_3',
        name: I18n.t('frontAndRearDoors')
      },
      {
        key: 'rsc1_4',
        name: I18n.t('glassMirror')
      },
      {
        key: 'rsc1_5',
        name: I18n.t('otherAccessories')
      }
    ]
  },
  {
    key: 'rmc2',
    name: I18n.t('oilRoad'),
    subCategories: [
      {
        key: 'rsc2_1',
        name: I18n.t('motorOil')
      },
      {
        key: 'rsc2_2',
        name: I18n.t('brakeFluid')
      },
      {
        key: 'rsc2_3',
        name: I18n.t('steeringOil')
      },
      {
        key: 'rsc2_4',
        name: I18n.t('gearboxOil')
      },
      {
        key: 'rsc2_5',
        name: I18n.t('otherAccessories')
      }
    ]
  },
  {
    key: 'rmc3',
    name: I18n.t('illumination'),
    subCategories: [
      {
        key: 'rsc3_1',
        name: I18n.t('headLight')
      },
      {
        key: 'rsc3_2',
        name: I18n.t('brakeLight')
      },
      {
        key: 'rsc3_3',
        name: I18n.t('fogLight')
      },
      {
        key: 'rsc3_4',
        name: I18n.t('indoor')
      }
    ]
  },
  {
    key: 'rmc4',
    name: I18n.t('powerSystem'),
    subCategories: [
      {
        key: 'rsc4_1',
        name: I18n.t('engine')
      },
      {
        key: 'rsc4_2',
        name: I18n.t('timmingBelt')
      },
      {
        key: 'rsc4_3',
        name: I18n.t('battery')
      },
      {
        key: 'rsc4_4',
        name: I18n.t('sparkPlug')
      },
      {
        key: 'rsc4_5',
        name: I18n.t('throttle')
      },
      {
        key: 'rsc4_6',
        name: I18n.t('gearBox')
      }
    ]
  },
  {
    key: 'rmc5',
    name: I18n.t('suspensionSteering'),
    subCategories: [
      {
        key: 'rsc5_1',
        name: I18n.t('ballHead')
      },
      {
        key: 'rsc5_2',
        name: I18n.t('shockAbsorber')
      },
      {
        key: 'rsc5_3',
        name: I18n.t('frontAndRearBridge')
      },
      {
        key: 'rsc5_4',
        name: I18n.t('exhaustPipe')
      },
      {
        key: 'rsc5_5',
        name: I18n.t('tireRim')
      },
      {
        key: 'rsc5_6',
        name: I18n.t('steeringGear')
      }
    ]
  },
  {
    key: 'rmc6',
    name: I18n.t('waterWay'),
    subCategories: [
      {
        key: 'rsc6_1',
        name: I18n.t('glassWater')
      },
      {
        key: 'rsc6_2',
        name: I18n.t('antifreeze')
      },
      {
        key: 'rsc6_3',
        name: I18n.t('airConditioningWater')
      }
    ]
  },
  {
    key: 'rmc7',
    name: I18n.t('circuit'),
    subCategories: [
      {
        key: 'rsc7_1',
        name: I18n.t('powerSupply')
      }
    ]
  },
  {
    key: 'rmc8',
    name: I18n.t('indoor'),
    subCategories: [
      {
        key: 'rsc8_1',
        name: I18n.t('seat')
      },
      {
        key: 'rsc8_2',
        name: I18n.t('giftSeries')
      },
      {
        key: 'rsc8_3',
        name: I18n.t('electronicProductSeries')
      }
    ]
  }
]

export const beautyCarWashCategoryListData = [
  {
    key: 'brc1',
    name: I18n.t('beautyCarWash'),
    subCategories: [
      {
        key: 'bsc1_1',
        name: I18n.t('fineWash')
      },
      {
        key: 'bsc1_2',
        name: I18n.t('interiorCleaning')
      },
      {
        key: 'bsc1_3',
        name: I18n.t('ozoneDisinfection')
      },
      {
        key: 'bsc1_4',
        name: I18n.t('glassFilm')
      },
      {
        key: 'bsc1_5',
        name: I18n.t('bodyFilm')
      },
      {
        key: 'bsc1_6',
        name: I18n.t('coating')
      },
      {
        key: 'bsc1_7',
        name: I18n.t('waxing')
      },
      {
        key: 'bsc1_8',
        name: I18n.t('platedCrystal')
      },
      {
        key: 'bsc1_9',
        name: I18n.t('glaze')
      },
      {
        key: 'bsc1_10',
        name: I18n.t('engineCompartmentCleaning')
      },
      {
        key: 'bsc1_11',
        name: I18n.t('bodyColor')
      }
    ]
  }
]

export const modificationCategoryListData = [
  {
    key: 'mrc1',
    name: I18n.t('modificationUpgrade'),
    subCategories: [
      {
        key: 'msc1_1',
        name: I18n.t('tireRim')
      },
      {
        key: 'msc1_2',
        name: I18n.t('audioModification')
      }
    ]
  }
]

export const consultationTypeList = [
  {
    key: 'ct1',
    name: I18n.t('dutyConsultation'),
    image: require('assets/images/technicianConsultation/dutyConsultation.png')
  },
  {
    key: 'ct2',
    name: I18n.t('quickConsultation'),
    image: require('assets/images/technicianConsultation/quickConsultation.png')
  },
  {
    key: 'ct3',
    name: I18n.t('graphicConsultation'),
    image: require('assets/images/technicianConsultation/graphicConsultation.png')
  },
  {
    key: 'ct4',
    name: I18n.t('expertConsultation'),
    image: require('assets/images/technicianConsultation/expertConsultation.png')
  }
]

export const popularProblems = [
  {
    key: 'pp1',
    name: I18n.t('startupProblem')
  },
  {
    key: 'pp2',
    name: I18n.t('tireProblem')
  },
  {
    key: 'pp3',
    name: I18n.t('brakeProblem')
  },
  {
    key: 'pp4',
    name: I18n.t('tallyProblem')
  }
]

export const quickConsultationClassify = {
  name: I18n.t('quickConsultation'),
  key: 'qcc',
  normalClass: [
    {
      key: 'nc1',
      name: I18n.t('fourStarConsultation'),
      subClasses: [
        {
          key: 'nsc1_1',
          name: I18n.t('fastGraphics'),
          price: 9,
          description: '当日获得技师答复，得到明确建 议前，交流不限次数。'
        },
        {
          key: 'nsc1_2',
          name: I18n.t('quickCall'),
          price: 19.9,
          description: '由平台推荐对症专业的四 星技师。'
        }
      ]
    },
    {
      key: 'nc2',
      name: I18n.t('fiveStarConsultation'),
      subClasses: [
        {
          key: 'nsc2_1',
          name: I18n.t('fastGraphics'),
          price: 19,
          description: '当日获得技师答复，得到明确建 议前，交流不限次数。'
        },
        {
          key: 'nsc2_2',
          name: I18n.t('quickCall'),
          price: 29.9,
          description: '由平台推荐对症专业的四 星技师。'
        }
      ]
    }
  ]
}

export const graphicConsultationClassify = {
  name: I18n.t('graphicConsultation'),
  key: 'gcc',
  normalClass: [
    {
      key: 'gc1',
      name: I18n.t('fourStarConsultation'),
      subClasses: [
        {
          key: 'gsc1_1',
          name: I18n.t('graphicConsultation'),
          price: 4.5,
          description: '线上获得技师答复，得到明确建 议前，交流不限次数。'
        }
      ]
    },
    {
      key: 'gc2',
      name: I18n.t('fiveStarConsultation'),
      subClasses: [
        {
          key: 'gsc2_1',
          name: I18n.t('graphicConsultation'),
          price: 9,
          description: '当日获得技师答复，得到明确建 议前，交流不限次数。'
        }
      ]
    }
  ],
  technicianPicture: {
    technicianInstruction: '',
    goodAt: '',
    onlineCharging: '',
    phoneCharging: '',
    generalWaitingTime: '',
    fasterSlower: '',
    attitudeRating: 90,
    effectScore: 98
  }
}

export const expertConsultationClassify = {
  name: I18n.t('expertConsultation'),
  key: 'ecc',
  technicianPicture: {
    technicianInstruction: '',
    professionalSkills: '',
    phoneCharging: '',
    phoneAnsweringRate: 69,
    recommendedHeat: '5.0'
  }
}

export const carOwnerVoice = {
  dislikes: [
    {
      key: 'dl1',
      logo: require('assets/images/logo.png'),
      author: 'christine@elisa',
      rating: 1,
      comment: '这项服务是我得到的最糟糕的服务。'
    },
    {
      key: 'dl2',
      logo: require('assets/images/logo.png'),
      author: 'chenyi@smile',
      rating: 1,
      comment: '糟糕的服务。'
    }
  ],
  likes: [
    {
      key: 'lk1',
      logo: require('assets/images/logo.png'),
      author: 'xiaoming@lin',
      rating: 5,
      comment: '感谢您的服务。'
    },
    {
      key: 'lk2',
      logo: require('assets/images/logo.png'),
      author: 'linda@jessy',
      rating: 5,
      comment: '很棒的服务。'
    }
  ]
}

export const expertInterview = [
  {
    key: 'ei1',
    name: '新闻标题'
  },
  {
    key: 'ei2',
    name: '新闻标题'
  },
  {
    key: 'ei3',
    name: '新闻标题'
  },
  {
    key: 'ei4',
    name: '新闻标题'
  },
  {
    key: 'ei5',
    name: '新闻标题'
  },
  {
    key: 'ei6',
    name: '新闻标题'
  },
  {
    key: 'ei7',
    name: '新闻标题'
  }
]

export const serviceCategoryList = [
  {
    key: 'scl1',
    name: 'maintenance'
  },
  {
    key: 'scl2',
    name: 'beautyCarWash'
  },
  {
    key: 'scl3',
    name: 'carRental'
  },
  {
    key: 'scl4',
    name: 'modificationUpgrade'
  },
  {
    key: 'scl5',
    name: 'motorizedCar'
  },
]

export const filterListData = [
  {
    filter: I18n.t('allDistricts'),
    key: 'f1',
    id: 1,
    subFilters: [
      {
        mainCategory: '附近',
        key: 'sf1_1',
        id: 1,
        subCategories: [
          {
            id: 1,
            name: '附近（职能范围）',
            key: 'sfp_1_1_1'
          },
          {
            id: 2,
            name: '500来',
            key: 'sfp_1_1_2'
          },
          {
            id: 3,
            name: '1000来',
            key: 'sfp_1_1_3'
          },
          {
            id: 4,
            name: '2000来',
            key: 'sfp_1_1_4'
          },
          {
            id: 5,
            name: '5000来',
            key: 'sfp_1_1_5'
          }
        ]
      },
      {
        mainCategory: '和平区',
        key: 'sf1_2',
        id: 2,
        subCategories: [
          {
            id: 1,
            name: '全部和平区',
            key: 'sfp_1_2_1'
          },
          {
            id: 2,
            name: '太原街',
            key: 'sfp_1_2_2'
          },
          {
            id: 3,
            name: '五里河',
            key: 'sfp_1_2_3'
          },
          {
            id: 4,
            name: '长白',
            key: 'sfp_1_2_4'
          },
          {
            id: 5,
            name: '北市场',
            key: 'sfp_1_2_5'
          }
        ]
      },
      {
        mainCategory: '大东区',
        key: 'sf1_3',
        id: 3,
        subCategories: [
          {
            id: 1,
            name: '全部大东区',
            key: 'sfp_1_3_1'
          },
          {
            id: 2,
            name: '东中街',
            key: 'sfp_1_3_2'
          },
          {
            id: 3,
            name: '小北',
            key: 'sfp_1_3_3'
          },
          {
            id: 4,
            name: '东站',
            key: 'sfp_1_3_4'
          }
        ]
      },
    ]
  },
  {
    filter: I18n.t('filter'),
    key: 'f2',
    id: 2,
    subFilters: [
      {
        mainCategory: '大东区',
        key: 'sf1_3',
        id: 1,
        subCategories: [
          {
            id: 1,
            name: '全部大东区',
            key: 'sfp_1_3_1'
          },
          {
            id: 2,
            name: '东中街',
            key: 'sfp_1_3_2'
          },
          {
            id: 3,
            name: '小北',
            key: 'sfp_1_3_3'
          },
          {
            id: 4,
            name: '东站',
            key: 'sfp_1_3_4'
          }
        ]
      },
    ]
  }
]

export const cityListData = [
  {
    id: 1,
    city: '上海',
    key: 'city1'
  },
  {
    id: 2,
    city: '北京',
    key: 'city2'
  },
  {
    id: 3,
    city: '沈阳',
    key: 'city3'
  },
  {
    id: 4,
    city: '广州',
    key: 'city4'
  },
  {
    id: 5,
    city: '深圳',
    key: 'city5'
  }
]

export const labelListData = [
  {
    id: 1,
    key: 'label1',
    label: I18n.t('costEffective'),
    icon: 'cny'
  },
  {
    id: 2,
    key: 'label2',
    label: I18n.t('convenientTransportation'),
    icon: 'car'
  },
  {
    id: 3,
    key: 'label3',
    label: I18n.t('recommend'),
    icon: 'thumbs-o-up'
  }
]

export const orderByList = [
  {
    title: I18n.t('recommend'),
    value: 1,
    selected: true
  },
  {
    title: I18n.t('byDistance'),
    value: 2,
    selected: false
  },
  {
    title: I18n.t('maintenance'),
    value: 3,
    selected: false
  },
  {
    title: I18n.t('beautyCarWash'),
    value: 4,
    selected: false
  },
  {
    title: I18n.t('modificationUpgrade'),
    value: 5,
    selected: false
  }
]

export const promotionData = {
  title: 'Title',
  description: 'Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product Awesome Product ',
  company: 'Company',
  price: 0.1
}

export const appInfoList = [
  {
    id: 1,
    title: I18n.t('contactCustomerService')
  },
  {
    id: 2,
    title: I18n.t('switchToBusiness')
  },
  {
    id: 3,
    title: I18n.t('agreement')
  },
]

export const configListData = [
  {
    id: 1,
    title: I18n.t('personalInformation')
  },
  {
    id: 2,
    title: I18n.t('accountAndSecurity')
  },
  {
    id: 3,
    title: I18n.t('feedback')
  },
  {
    id: 4,
    title: I18n.t('aboutUs')
  }
]

export const driverTips = [
  {
    title: '初学者的汽车驾驶技巧',
    image: require('assets/images/driverTips.jpg'),
    read: 15,
    like: 124,
    dislike: 18,
    content: `如果您刚刚开始学习驾驶汽车并想要了解驾驶时需要考虑的一些基本知识，或者只是想要一些驾驶技巧，那么您来对地方了。当一个人学习如何驾驶时，需要记住很多事情。事实上，无论是新手还是成熟的车手，当你在方向盘后面时要非常小心。

    以下是初学者应该记住的一些驾驶技巧：
    
    1.熟悉你的车
    在开始驾驶之前，您应该做的第一件事就是让您的车感觉舒适。在实际开始驾驶之前，先从理论上熟悉汽车的基本知识。了解离合器的作用，了解齿轮布置并了解事实，例如不应该以更高的速度换挡到较低的档位，并且在接合倒档之前让车辆停下来总是更好。
    
    2.纠正你的座位
    正确的座椅位置至关重要;即使是经验丰富的驾驶员也没有正确定位，因此缺乏舒适性和控制力，这增加了发生事故的可能性。确保您完全坐直，背部和臀部完全坐在座位上并处于有角度的位置，从而有助于防止背部受伤。座椅应放置在一个可以看到周围，非常容易和舒适的位置。通常认为座椅的高度应使您的眼睛处于挡风玻璃高度的一半。当您使用汽车的加速踏板，制动踏板和离合器踏板时，座椅应纵向位于膝盖未拉伸太多的位置。用右脚完全踩下制动器并踩下离合器，这样做的方式应使踩下踏板时，膝盖保持弯曲约120度。坐直，不要向前弯腰。
    
    3.避免分心
    一旦您坐在驾驶座上，请注意，调整后视镜，系好安全带并牢记道路规则。在你开车的时候避免分心，因为现在道路都挤满了人，所以你需要每隔一秒钟保持你的注意力和注意力集中在它上面。开始驾驶之前有两个最常见和最基本的规则;开车时不要使用手机，不要饮酒和开车。除了这些规则，新的驾驶员尤其应该避免进食，将音乐调高到非常高的音量并沉迷于深度对话。
    
    4.正确握住方向盘
    虽然没有一种正确的握住方向盘的方法，但正确性取决于你想要如何握住方向盘以便能够最大限度地控制方向盘。大多数研究表明，“9点钟”和“3点钟”的位置是最好的。正确握住方向盘以最好地控制转向，进而控制汽车是非常重要的。
    
    5.记得使用转向灯
    了解转向灯或指示灯的重要性。一旦你在路上，你就是其中的一员，因此，当你即将转弯时，提醒周围的车辆是非常重要的。使用信号有助于在路上节省大量意外事故。
    
    6.避免超速
    当驾驶汽车时，最常见的诱惑是加速。在开始超速之前，首先要熟悉汽车是非常重要的。
    
    7.与其他车辆保持相当远的距离
    人们应始终与前方行驶的车辆保持适当的距离。您可能是一个非常安全的驱动程序并遵守所有规则和规定，但这并不意味着其他规则和规则也是如此。安全驾驶的最佳方式是成为防守型驾驶员，而不是积极的驾驶员。
    
    8.不要不必要地使用喇叭
    喇叭会提醒你身边的司机，不要沮丧。过度使用喇叭会刺激驾车者，有时会导致道路愤怒。
    
    9.开车时要保持冷静
    
    3
    评论
    不要让你的心情影响你开车的方式，特别是如果你是初学者。愤怒的驾驶不应该迫使你加速，良好的心情并不意味着你有权在路中间漫步。始终保持冷静和沉着，并在驾车时遵守规则和规定。`
  }
]

export const userConcerns = [
  {
    id: 1,
    title: I18n.t('collection'),
    image: require('assets/images/userProfile/favourite.png'),
    color: '#fa5'
  },
  {
    id: 2,
    title: I18n.t('waitingForReview'),
    image: require('assets/images/userProfile/comment.png'),
    color: '#f50'
  },
  {
    id: 3,
    title: I18n.t('raiders'),
    image: require('assets/images/userProfile/book.png'),
    color: '#70e'
  },
  {
    id: 4,
    title: I18n.t('recentlyViewed'),
    image: require('assets/images/userProfile/history.png'),
    color: '#55f'
  },
  {
    id: 5,
    title: I18n.t('myFocus'),
    image: require('assets/images/userProfile/focus.png'),
    color: '#55f'
  }
]

export const featureList = [
  {
    id: 1,
    title: I18n.t('pendingPayment'),
    icon: 'book'
  },
  {
    id: 2,
    title: I18n.t('canBeUsed'),
    icon: 'calendar-check-o'
  },
  {
    id: 3,
    title: I18n.t('refundAfterSale'),
    icon: 'money'
  },
  {
    id: 4,
    title: I18n.t('myOrder'),
    icon: 'list-alt'
  },
  {
    id: 5,
    title: I18n.t('card'),
    icon: 'credit-card'
  },
  {
    id: 6,
    title: I18n.t('integral'),
    icon: 'trophy'
  },
  {
    id: 7,
    title: I18n.t('borrowMoney'),
    icon: 'exchange'
  },
  {
    id: 8,
    title: I18n.t('myPurse'),
    icon: 'briefcase'
  }
]

export const technicianBanner = [
  {
    id: 1,
    image: require('assets/images/technicianConsultation/tech1.jpg')
  },
  {
    id: 2,
    image: require('assets/images/technicianConsultation/tech2.jpg')
  },
  {
    id: 3,
    image: require('assets/images/technicianConsultation/tech3.jpg')
  },
  {
    id: 4,
    image: require('assets/images/technicianConsultation/tech4.jpg')
  },
  {
    id: 5,
    image: require('assets/images/technicianConsultation/tech5.jpg')
  }
]

export const lawItemList = [
  {
    id: 1,
    text: '法律声明'
  },
  {
    id: 2,
    text: '车主点评用户服务条款'
  },
  {
    id: 3,
    text: '车主点评知识产权'
  },
  {
    id: 4,
    text: '车主点评隐私政策'
  },
  {
    id: 5,
    text: '价格说明'
  },
  {
    id: 6,
    text: '侵权投诉须知'
  },
  {
    id: 7,
    text: '信息发布和认领规则'
  },
  {
    id: 8,
    text: '车主点评商户信息发布管理规范'
  },
  {
    id: 9,
    text: '车主点评商户入驻协议'
  },
  {
    id: 10,
    text: '车主点评商户服务协议'
  },
  {
    id: 11,
    text: '车主点评团购用户服务条款'
  },
  {
    id: 12,
    text: '车主点评平台用户服务协议'
  },
  {
    id: 13,
    text: '车主点评点评规则'
  },
  {
    id: 14,
    text: '车主点评网争议调解处理规范'
  }
]

export const disclaimer = `免责声明

您正在使用的应用由车主点评网开发或拥有。AppStore不承担该程序任何方面的任何责任，包括但不限于其性能、知识产权、支持、服务、收费及内容。

任何车主点评网手机客户端的手机品牌合作商，如AppStore，并不因合作获得车主点评网手机客户端的知识产权，也非车主点评网手机客户端的赞助商，因车主点评网手机客户端侵犯了任何第三方知识产权的，车主点评网承担相应的法律责任。

车主点评网对于任何包含、经由或连接、下载或从任何与有关本网站所获得的任何内容、信息或广告，不声明或保证其正确性或可靠性；并且对于用户经本网站上的内容、广告、展示而购买、取得的任何产品、信息或资料，车主点评不负保证责任。用户自行负担使用本网站的风险。

车主点评`

export const characterList = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

export const informationReleaseClaimRules = `COI 信息发布和认领规则

为了规范用户在车主点评网平台发布COI 信息之行为，以及相关COI 经营者对用户发布之COI 认领之行为，根据相关法律法规和车主点评网在线规则、协议等，制定本规则。
一、【COI 定义】COI 系Customer of Information 的缩写，在本规则中COI 特指在车主点评网平台上建立的指向任一公开经营且符合网站收录范围的商户。
二、【普通用户发布COI】车主点评网注册用户可以在法律和协议、规则允许的范围内向平台添加任一公开经营的、属网站收录范围的COI 信息，善意、客观填写该COI 所在城市、区域、商户类别、商户名、地址、电话等信息，用户同意车主点评网有权判定COI 信息的真实与否，并自行决定采取包括删除、屏蔽等在内的处理措施。
三、【COI 信息发布要求】在COI 信息发布过程中应遵守法律、法规、规章、政策和公序良俗，不侵犯他人合法权益，不违反车主点评网的任何协议或者规则。为了保障COI信息质量，发布者应尽可能做到：使用准确、简洁、完整的COI 名称；确保将COI 放在最合适、最相关的类别下；使用准确、通俗易懂的语言介绍COI 的实际情况，突出其优势和特点
四、【禁止重复发布】为了保障平台COI 信息的简洁、统一，避免用户困扰，车主点评网平台中已经存在的COI 信息，原则上禁止任何人重复发布。用户同意车主点评网有权判定COI 信息的重复与否，并自行决定采取包括删除、屏蔽、合并等在内的处理措施。
五、【COI 信息的合法性】COI 信息中不得包含以下内容：
1. 违反国家法律法规禁止性规定的；
2. 政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；
3. 欺诈、虚假、不准确或存在误导性的；
4. 侵犯他人知识产权或涉及国家秘密、第三方商业秘密及其他专有权利的；
5. 侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的；
6. 存在可能破坏、篡改、删除、影响点评平台任何系统正常运行或未经授权秘密获取点评平台及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；
7. 其他违背社会公共利益或公共道德或依据点评平台相关协议、规则的规定不适合在点评平台上发布的。
六、【COI 信息的知识产权许可】发布COI 的用户承诺其系该COI 信息的著作权人，或者其行为得到著作权人的充分授权。COI 信息发布者在车主点评网平台上传、存储、发布相关COI 信息的行为即表明该用户主动将该COI 信息的著作财产权，包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权等，以及应当由著作权人享有的其他可转让权利无偿独家转让给车主点评网运营商所有，同时表明该用户许可车主点评网有权利就任何主体侵权而单独提起诉讼，并获得全部赔偿。本协议已经构成《著作权法》所规定的书面协议，其效力及于用户在车主点评网发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。该用户同时同意车主点评网及车主点评网许可的关联方有权将用户在车主点评网发表的COI 信息进行使用或者与其他人合作使用，使用范围包括但不限于网站、电子杂志、杂志、刊物等。
七、【COI 信息的认领】COI 信息的认领是指经营者主张现有无主COI 对应的实体商户为其所经营管理，或将其经营管理的实体商户在车主点评网发布新的COI，从而取得该COI 一定的管理权限并使用该COI 商户中心部分服务功能的行为。
八、【认领程序须知】进行认领操作的商户必须承诺其是其认领COI 对应的实体商户的真实经营管理者，或者是其发布新的COI 对应的实体商户的真实经营管理者。商户承诺其在COI 认领环节向车主点评网提交的证明材料合法、真实、准确详尽。否则商户承诺独立承担因此导致的相应责任及后果，使车主点评网免责；
九、【认领后的权利和义务】商户承诺其通过商户中心发布、编辑、更新的商户信息（包括但不限于文字、图片等）真实准确，并且不侵犯任何人的合法权益；商户承诺在其接受除商户中心基础服务之外的增值服务、推广技术服务时，严格遵守相关服务协议的相关约定；商户同意在使用车主点评网商户服务的同时接受车主点评网向其登记的电子邮件、手机、通信地址发送商业信息。
十、【法律责任】对任何发生在COI 发布、认领过程中的涉嫌违反国家法律、行政法规、部门规章等规范性文件或者车主点评网在线规则、条款、协议的行为，均应由行为人承担全部法律责任。若因此给车主点评网或者任何第三方造成损失，该行为人应全额赔偿相应损失。
十一、【恶意认领的法律责任】不符合条件的任何个人、组织恶意实施认领行为，给车主点评网或者相关COI 权利人造成损失的，应当承担法律责任，包括并不限于赔偿经济损失、消除影响、赔礼道歉等。如行为情节严重或者造成恶劣影响，还应当依法承担相应行政、刑事责任。
十二、【平台免责】用户向车主点评网上传、发布COI 信息的，声明其将自行保留其所发布的信息之备份，同意车主点评网不对用户所发布信息的保存、修改、删除或储存失败负责。
十三、【规则体系】本规则系车主点评网规则体系的重要组成部分。对同一情形《车主点评用户服务条款》、《车主点评网商户服务协议》中已有规定的，从其规定；未有规定或本规则有特殊规定的，按照本规则执行。
十四、【生效和修改】本规则于2019年3 月15 日首次发布，于2018 年3 月15 日起生效。车主点评平台可根据平台运营情况随时调整本规则并以公告的形式向用户及商家公示。__`

export const noticeOfInfringementComplaint = `侵权投诉须知

1. 根据《中华人民共和国侵权责任法》第三十六条之规定，任何第三方认为用户利用车主点评网平台侵害其民事权益或实施侵权行为的，包括但不限于侮辱、诽谤等，被侵权人有权书面通知车主点评网采取删除、屏蔽、断开链接等必要措施。
2. 根据《信息网络传播权保护条例》之规定，任何第三方认为车主点评网所涉及的作品、表演、录音录像制品，侵犯自己的信息网络传播权或者被删除、改变了自己的权利管理电子信息的，可以向车主点评网提交书面通知，要求车主点评网删除该侵权作品，或者断开链接。通知书应当包含下列内容：
（一）权利人的姓名（名称）、联系方式和地址；
（二）要求删除或者断开链接的侵权作品、表演、录音录像制品的名称和网络地址；
（三）构成侵权的初步证明材料。权利人应当对通知书的真实性负责。您同时应该了解，根据《信息网络传播权保护条例》之规定，车主点评网有权将您的投诉通知书转送至相关服务对象。该服务对象接到转送的通知书后，认为其提供的作品、表演、录音录像制品未侵犯他人权利的，可以向车主点评网提交书面说明，要求恢复被删除的作品、表演、录音录像制品，或者恢复与被断开的作品、表演、录音录像制品的链接。车主点评网接到服务对象的书面说明后，有权立即恢复被删除的作品、表演、录音录像制品，或者恢复与被断开的作品、表演、录音录像制品的链接，同时将该服务对象的书面说明转送投诉人。此种情形下，您不得再通知车主点评网删除该作品、表演、录音录像制品，或者断开与该作品、表演、录音录像制品的链接。
3. 任何第三方（包括但不限于企业、公司、单位或个人等）认为车主点评网用户发布的任何信息侵犯其合法权益的，包括但不限于以上两点，在有充分法律法规及证据足以证明的情况下，可以按照本指引文件提供的联系方式进行投诉。
4. 为了明确法律责任，方便车主点评网依法依约及时作出处理，除前述指引已提及之投诉内容外，侵权投诉还应包含下述信息：
（1）被侵权人的证明材料，或被侵权作品的原始链接及其它证明材料。
（2）侵权信息或作品在车主点评网上的具体链接。
（3）侵权投诉人的联络方式，以便车主点评网相关部门能及时回复您的投诉，最好包括电子邮件地址、电话号码或手机等。
（4）投诉内容须包括以下声明：“本人本着诚信原则，有证据认为该对象侵害本人或他人的合法权益。本人承诺投诉全部信息真实、准确，否则自愿承担一切后果。
（5）本人亲笔签字并注明日期，如代理他人投诉的，必须出具授权人签字、盖章的授权书。
5. 投诉人可以通过下列方式通知车主点评网，将投诉资料邮寄至下述地址：
邮寄地址：上海市松江区梅家浜路800弄35号607室
收件人：车主点评网客服部
6.车主点评网建议您在提起投诉之前咨询法律顾问或律师。我们提请您注意：投诉人应当对其投诉内容的准确性、客观性、合法性、完整性承担责任。如果侵权投诉不实，则用户可能承担法律责任；如果投诉通知内容不准确、不完整，则投诉人应承担因此造成的后果。
7.投诉人须了解，车主点评网仅有权利和义务在法律法规规定及平台规则约定的范围内，在网站工作人员的认知水平和能力、资格范围内对投诉作出判断和处理或答复。这一处理机制不同于也无意替代司法机关的裁断。车主点评网亦无意介入投诉人与被投诉人之间的纠纷。车主点评网不对您的投诉是否能够得到某种结果作出任何承诺或者保证，亦不因对您的投诉处理行为而承担任何义务或者责任。`

export const legalNotices = `法律声明


在使用车主点评网提供的各项服务前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用车主点评网的各项服务，但如果您使用车主点评网的各项服务，您的使用行为将被视为对本声明全部内容的认可。
车主点评网在中华人民共和国相关法律法规和政策环境下开展互联网信息服务。在您使用车主点评网的服务或者其内容期间，您同意与车主点评网一起遵守相关法律法规，同时遵守车主点评网之在线条款。这些条款包括并不限于：车主点评网《隐私政策》详细介绍了我们提供服务过程中的隐私政策和实践。我们同时可能会为某些服务制定其他隐私声明条款。车主点评网视知识产权为重要战略资产，并一贯重视保护自身知识产权。请仔细阅读本网站《知识产权声明》以获悉我们的知识产权保护政策。任何单位或个人认为车主点评网所载内容或者信息可能涉嫌侵犯其合法权益，有权按照本网站《侵权投诉须知》向本网站提出投诉。车主点评网重视每一位用户的体验，无论其系注册用户、商户或者未注册用户。我们通过《车主点评用户服务条款》明确我们与用户之间的权利义务，并向用户明确我们的法律责任和双方应共同遵守的规则、规范。特定的用户、商户或者用户的特定行为可能同时受到本网站的其他规则、规范、公约、声明的规制。我们建议相关用户或者相关行为实施者对上述条文进行仔细阅读和充分了解。诚实信用是我们和所有用户实施民事行为的基本准则，无论您在车主点评网发布点评信息、参与电子商务活动还是实施其他任何民事活动，都应当遵守诚信原则。为此，我们制定并公布了《车主点评网商户诚信公约及管理办法》等一系列诚信公约和规则，以兹共同遵守。车主点评网依托其良好的用户口碑和广泛的影响力，通过团购等活动参与到电子商务活动中。我们重视消费者权益保护，向消费者做出了《消费者保障承诺》。为了进一步解决消费者在与车主点评网相关的交易活动中可能发生的争议，我们还制定了《车主点评网争议调解处理规范》。在消费或者纠纷处理过程中，仔细阅读并遵守上述条款系您的重要义务。如果针对同一问题，车主点评网的通用协议或者规则与特定专门协议或者规则有不同规定，则对该问题应优先适用该专门协议或者规则之规定，除非另有不同声明或约定。如果您与车主点评网签署了线下书面协议或者另行商定了专门协议，且其部分约定与在线条款不同，则应对该部分内容应优先适用线下书面协议或者另行商定之协议。您须知晓，车主点评网所载部分内容，包括并不限于转载内容、点评信息、头条内容等，仅系出于传递更多信息之目的，并不意味车主点评网赞同其观点或证实其内容的真实性。在法律允许的范围内，车主点评网对这些内容不承担法律责任。车主点评网仅为互联网信息服务平台，不对用户发表、转载、上传的任何内容提供任何保证，包括但不限于保证内容符合您的要求、对您的免费服务不会中止等。如因网络状况、通讯情况或任何第三方网站和管理部门的要求导致您不能正常使用本网站的服务，本网站在法律允许的范围内予以免责。我们深知，世界各国的法律规定不尽相同，而互联网技术则允许世界各国的用户访问任一互联网站。您承诺，如果按照您所在的国家或者地区的法律规定，您使用车主点评网的任何服务或者信息内容为非法，则您有义务拒绝或者立即停止此类使用行为。您应自行为您的使用行为承担法律责任。如因您的非法使用行为导致车主点评网受到任何追究或者损失，您有义务承担全部赔偿责任。`

export const businessInformationReleaseManagementSpecifications = `车主点评商户信息发布管理规范


一、目的
为了规范商户在车主点评平台发布信息的行为，保障消费者的合法权益，根据国家法律、法规、规章、政策及《商户服务协议》、《商户入驻服务合同》等制定本规范。
二、禁止发布违法违规、违背社会公序良俗的内容
（一）适用范围
本文则适用商户的创建、维护COI 信息（即为门店信息），上传、发布门店头图和商户相册，发布包括但不限于团购、闪惠、码上付、商户通等产品信息，通过商户回应功能发布文字、图片等信息的行为。

（二）信息发布要求
1. 一般要求
1.1 商户的COI 信息、门店头图和商户相册、产品或者服务信息及商户评论回复信息发布过程中遵守法律、法规、规章、政策和公序良俗，内容健康，且不侵犯他人合法权益，不违反车主点评的任何协议或者规则，并且:
1.1.1 商户COI 信息：COI 信息应准确有效，符合平台要求。
1.1.2 门店头图及商户相册：图片应真实有效，与经营场所及相关产品描述一致。
1.1.3 产品或者服务名称：使用准确、简洁、完整的产品或服务名称作为产品名称，需与描述及图片展示的一致，避免出现名称冗多、书写错误等情况。
1.1.4 类别：发布的产品或者服务信息应放置在最合适、最相关的类别下。
1.1.5 产品或者服务描述：使用准确、通俗易懂的语言介绍产品的实际情况，突出产品的优势和特点；排版应美观整齐，方便网站浏览者阅读。车主点评平台相关规则对介绍内容有明确要求的，应符合其要求。
1.1.6 产品图片：图片需与产品名称、描述等一致。
1.1.7 不得发布雷同信息:完全相同或极其近似的产品或者服务信息不得提交第二条及更多，否则作为“雷同信息”处理。完全相同的信息指：描述和图片完全相同；或描述完全相同，没有图片；或描述完全相同，有的添加了图片，有的没图片。近似的信息指：图片相同，且描述近似；或图片虽不同，但是信息描述高度近似。
1.1.8 产品信息内容必须与产品、所提供服务匹配。
1.1.9 商户回应：应针对用户的问题回答简单扼要，内容健康，不得进行引流或任何形式的推广。
1.1.10 所有信息均应严格遵守相关法律规定、遵循市场规律,保证对其真实性、准确性、合法性负责。
1.2 商户发布的信息不得包含以下内容：
1.2.1 违反国家法律法规禁止性规定的；
1.2.2 政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；
1.2.3 欺诈、虚假、不准确或存在误导性的；
1.2.4 侵犯他人知识产权或涉及国家秘密、第三方商业秘密及其他专有权利的；
1.2.5 侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的；
1.2.6 存在可能破坏、篡改、删除、影响车主点评平台任何系统正常运行或未经授权秘密获取车主点评及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；
1.2.7 其他违背社会公共利益或公共道德或依据商户入驻服务合同等平台规则、协议的规定不适合在平台上发布的。
发布的文字。
2.违规处理措施
2.1 车主点评有权针对以下情形,基于合理理由作出独立判断将涉及到的产品操作下线、关闭商户COI、终止合作:
2.1.1 商户的COI 信息违反本规范的；
2.1.2 商户的门店头图和商户相册违反本规范的；
2.1.3 商户在合作产品页面发布的信息违反本操作规范的；
2.1.4 商户评论回应违反本规范的；
2.1.5 在用户评论内发现有违反本规范的；
2.2 车主点评基于媒体曝光、政府行政部门通知、消费者投诉等原因认定商户发布的信息存在违反本操作规范的,将采取相应处理措施,包括但不限于对商户合作的所有在线产品进行下线操作、关闭商户COI、终止合作等。
2.3 如商户在违规的同时违反了《商户入驻服务合同》的约定，车主点评将按照相应违规情节追究商户的违约责任。


3.申诉流程
3.1 商户仅可针对第2.1 条第2.1.1-2.1.4 款采取的处理措施提出申诉，媒体曝光、政府行政部门通知、消费者投诉等其他原因被认定违规并予以处理的均不能进行申诉。
5.2 商户可通过相应渠道向车主点评进行反馈，并提供相应证明材料，同时进行整改以符合本操作规范。
5.3 车主点评在收到商户申诉之日起5 个工作日内核实；若判定商户提供的证明材料成立且整改符合要求的，则取消相应处理措施并将结果告知商户；若判定商户提供的证据不成立、未整改或整改不符合要求,则将核实结果告知商户并维持处理。
5.4 如商户恶意申诉或提供虚假证明材料的，车主点评将对商户加重处罚。


三、其他违规信息发布规范

(一)商户未按《商户入驻服务合同》、平台规则及其他管理要求（包括但不限于网站公告、站内信通知、系统提示等）发布产品/服务信息行为，包括但不限于以下情形：
1.发布违规广告信息
1.1 发布违规广告信息，是指商户在产品/服务或店铺页面发布不以成交为目的的产品/服务信息。
1.2 发布违规广告信息包括但不限于下列情形：
1.3 发布心情故事、仅供欣赏、测试等非实际提供的产品/服务信息；
1.4 通过产品标题、详情、店铺介绍、站内信、短信等方式发布其他外部网站的产品/服务等信息，不得发布与商户/服务无关的第三方信息，包括但不限于在团购等产品使用流程中增加第三方平台预约、下单等步骤的行为均属于发布违规广告信息行为；
1.5 发布非该门店的其他经营实体店信息、手机号码、银行账号及个人支付宝账户等信息，特殊情形除外。
2.发布错误描述信息
2.1 信息与实际不符，是指商户在产品/服务或店铺页面发布的产品/服务或店铺信息与实际不符。
2.2 信息与实际不符包括但不限于下列情形：
2.2.1 对产品/服务做夸大、虚假描述或宣传。例如：a）使用“国家级”、“最高级”、“最
佳”等用语的夸大描述；或b）对产品/服务的质量、用途、使用效果等进行虚假或引人误解的宣传。
2.2.2 在产品/服务标题、图片、价格、售后服务、详情等区域出现的产品/服务信息、店铺基础信息等与实际不符；
2.2.3 使用虚假的好评或使用与店铺实际信息不符的标识；
2.2.4 产品标题等信息不实或者与本产品/服务无关的；
2.2.5 产品标题、图片、价格及售后服务等产品要素之间明显不匹配。
3.发布规避信息
3.1.发布规避信息是指商户通过各种方式刻意规避平台规则的要求发布产品/服务信息。
3.2 发布规避信息包括但不限于下列情形：
3.2.1.利用低价产品/服务或修改产品/服务等方式引流，即滥用产品/服务设置（包括但不限于团购上单），刻意规避平台产品/服务发布规则及其他相关规则，在产品/服务链接中放置低价产品/服务引流的行为。
3.2.2.发布价格严重偏离实际的产品/服务，即从产品/服务的信息层面判断，商户发布的产品价格与该产品/服务的实际价格严重不符。
3.2.3.以非常规的数量单位发布产品/服务。
3.2.4.通过编辑产品/服务类目、品牌、型号等关键属性使其成为另一款产品/服务。
3.2.5.发布抽奖产品/服务，即以“随机抽取”、“抽奖”、“随机发”、“福袋”等字样进行描述，具备博彩性质，诱导买家的产品/服务。

（二）违规处理
1.商户违反本规则之规定发布产品/服务信息的，平台有权要求商户在指定期限内进行整改；或者视情况对相应产品/服务信息采取处罚措施。
2.针对商户违反本规则发布产品/服务信息的行为，平台除对违规产品/服务信息采取相应处理措施外，将视违规情节轻重，对店铺采取下列一项或者多项处理措施：
2.1.关闭商户优惠活动；
2.2 取消平台活动报名资格；
2.3 双平台排序置底；
2.4 店铺全部项目销量清零、全部项目隐藏且不可购买；
2.5 经营评分权益失效；
2.6 解除协议、终止合作，清退商户。
3.商户违反本规则第三条之规定，发布规避信息的，为了保障消费者合法权益，平台除采取
本条（二）1、2 款规定的措施外，还将视情况暂停款项结算。

四、附则
（一）本操作规范于2019 年3 月15日发布，于发布后第7 日生效。商户如对本操作规范有意见的，可在生效日前联系车主点评反馈意见。
（二）本操作规范中约定的通知，是指车主点评通过商户中心向商户推送通知、车主点评向商户指定电子邮箱发送通知、车主点评网站公告等方式。
（三）商户于本操作规范生效日后在车主点评发布的信息、商户于生效日前发布且生效日后继续在线展示的信息均适用本操作规范。
（四）车主点评可根据国家法律法规变化及维护交易秩序、保护消费者权益需要，不时修改本操作规范，并在生效前通过车主点评网站页面或其他方式向商户进行公示。如商户不同意变更事项的，有权于变更事项确定的生效日前联系车主点评反馈意见。如反馈意见得以采纳，车主点评将酌情调整变更事项。如商户对已生效的变更事项仍不同意的，商户应当于变更事项确定的生效之日起停止使用车主点评服务，变更事项对商户不产生效力；如商户在变更事项生效后仍继续使用车主点评服务的，则视为同意已生效的变更事项。
（五）商户发布违反本操作规范的信息未受到车主点评及时制止和处罚的，不代表车主点评认可其做法。因商户违规信息导致平台经济、声誉受损或者受到行政、司法追究的，商户除承担本规范指定之处罚外，还应当赔偿车主点评因此受到的所有损失，包括直接损失、间接损失、声誉损失、律师费、诉讼费、调查取证费、罚款等。
（六）本操作规范与《商户服务协议》、《商户入驻服务合同》等不一致之处，以本规范为准。但是《商户服务协议》、《商户入驻服务合同》等有更为严厉处罚措施和管理制度的，以该措施或者制度为准。
（七）未列入本规范适用范围的商户信息发布。`

export const merchantSettlementAgreement = `商户入驻协议

商户入驻服务合同编号:

特别提醒:
1、在接受本合同之前,请您仔组阅读本合同的全部内容(特别是以下划线标注的内容)。如果您对本合问的条款有疑问的,请通过车主点评网客服渠道进行询问,车主点评网将向您解释条款内容。如果您不同意本合同的任意内容,或者无法准确理解车主点评网对条款的解释,请不要同意本合同或使用本合同项下的服务,否则,表示您已接受了以下所述的条款和条件,同意受本合同约束,届时您不应以未阅读本合同的内容或者未获得车主点评网对您问询的不了解等理由,主张本合问无效,或要求撤销本合同。

2、为充分维护您的合法权益,车主点评网特别提醒您特别关注本合同条款中的黑体及或加下划线部分,请您务必仔细阅读。

3、您承诺维护车主点评内容的客观、真实性,不得进行违反诚信的任何行为《包括但不限于商家及利益相关方给自己在线商户提交好评、通过收买或者诱导(如折扣等)用户提交好评,使用虚假账号提交好评、利用违規手段进行虚假点击等影响点评真实性、客观性的行为及其他违反诚信公约的行为),否则车主点评有权依据《商户诚信公约及管理办法》对您采取星级清空、排序降权、公开警告等处罚措施。



甲方:
乙方:上海鹰东科技发展有限公司
根据《中华人民共和国合同法》及相关法律、法规的规定,甲乙双方经友好协商,签订此合同,以共同遵守。

一、	定义条款

甲乙双方确认同意本条款中对于各名词的解释及定义,并同意按照该定义履行相关义务。

1.1平台(以下统称为“平台”):特指由乙方现在或将来拥有合格权限运营/管理的,提供团购、闪惠、预订等技术服务的网络服务平台,包括但不限于车主点评网、乙方关联方、乙方合作方运营/管理的网络服务平台,及未来可能新设或合作的网络平台等。

1.2用户:即在平台注册,并使用其本人注册的账户,通过平台展示的信息获取商品/服务的个人。

1.3甲方信息:甲方通过平台发布的,在平台页面上展示的甲方商品/服务/优惠信息(如商品/服务描述、兑换券有效期、团购规则、门店信息、会员优惠、结算优惠比例等)。该信息为甲方就前述商品/服务向用户发出的要约,一旦用户通过平台确认同意购买甲方该商品服务,即视为甲方与用户达成了相应合同。

1.4商家中心:为完成合作内容,乙方基于合同为商户提供的管理系统,包括“商家中心”、“财富通”等。

1.5团购:针对由一定数量的用户组团,通过平台以较低折扣购买甲方通过平台发布的商品/服务,并最终由甲方提供相应商品服务的网络交易行为。

1.6闪惠:针对甲方向用户提供的商品/服务,用户通过该功能向甲方支付需付费用,可享受一定优惠的网络交易行为。

1.7兑换券:指用户通过平台获取的,甲方向用户提供商品/服务的消费凭证。兑换券包括但不限于团购券、平台订单等,展现方式包括但不限于字符二维码、订单、短信、电子邮件等。

1.8兑换券消费数:用户已实际消费的兑换券数量。鉴于甲方提供的商品服务通过商家中心进行验证为用户实际消费的依据,故兑换券消费数以平台验证已标记消费的数量为准。

1.9门店价:签订本合同时,甲方提供的商品/服务直接对外销售提供时的单份销售价格。

1.10平台价:甲方提供的商品服务通过平台向用户展示的价格。

1.10.1闪惠平台价为用户就甲方提供的商品务实际应支付的单笔消费对应的款项(计算标准为:门店价乘以用户使用闪惠功能时显示的优患折扣比例(无折扣时比例为1));

1.10.2团购平台价为参加平台团购活动时的单份销售价格。

1.11代收款项:乙方、乙方关联方/乙方合作方代甲方收取的,用户通过平台向甲方支付的已实际消费的兑换券对应的款项/闪惠等功能对应的消费款项。该款项扣除双方构定的服务费后,由乙方/乙方关联方/乙方合作方变付给甲方。

111.1团购代收款项计算标准为:团购平台价x兑换券消费数。

1.112闪惠代收款项计算标准为:用户实际消费商品服务的闪惠平台价的总和。

1.12服务费:为了实现甲方进入平台开展经营活动、进行交易之目的,乙方为甲方提供本合同约定之服务收取的相关费用。

1.12.1团购技术服务的服务费为截至兑换券有效期截止之日,兑换券消费数乘以服务费价格

1.12.2闪惠等技术服务的服务费为服务费价格的总和。

1.13闪惠服务费率:双方可采用书面、邮件或商家中心任一种方式确认的支付给乙方的技术服务费比例。

1.14服务费价格:用户每实际消费一张兑换券或通过闪惠功能每实际消费一次,甲方应向乙方支付的服务费数额。闪惠的服务费价格计算标准为:平台价×闪惠服务费费率。团购及其它功能服务费计算标准以双方通过书面、邮件或商家中心确认的比例为准。

1.15结算价:针对每一张已实际消费的兑换券/每一次用户通过闪惠等功能实际消费,于代收款项中扣除应收取的服务费、商家自促费等其他费用后应支付给甲方的数额。结算价=团购平台价/闪惠平台价-团购服务费价格/闪惠服务费价格-商家自促费。

1.16代收净额:对应用户实际消费的兑换券数量/通过闪惠功能实际消费数量,应支付给甲方的结算款项。

1.16.1团购技术服务代收净额计算标准为:团购结算价×兑换券消费数。

1.16.2闪惠技术服务代收净额=用户实际消费商品/服务的闪惠技术服务结算价的总和。

二、服务内容
为实现甲方进入平台开展经营活动、通过平台发布商品/服务信息、与用户进行交易之目的,乙方为甲方提供授权许可计算机软件及软件技术服务网络技术服务及其他相关服务,具体服务内容如下

2.1团购技术服务
乙方/乙方关联方/乙方合作方为甲方提供商家中心等系统平台、软硬件设备,以实现甲方商品/服务在线展示,为用户提供兑换券验证、汇总管理经营数据等经营行为,并实现代甲方收取商品/服务对应的款项的技术服务。

2.1.1授权许可甲方使用乙方所有或合法运营、管理的与合作内容相关的计算机软件,并提供软件技术服务。

2.1.2乙方以自有技术、知识,为甲方解决其在平台经营过程中遇到的网络技术问题。例如,针对甲方使用“平台验证系统”进行技术指导和专业培训。

2.1.3技术服务费结算:乙方/乙方合作方/乙方关联方通过平台代甲方收取商品/服务对应款项,并将代收净额支付给甲方。

2.2闪惠技术服务
甲方在乙方平台开通闪惠技术服务,通过平台、第三方支付系统、客户关系管理系统,代甲方收取其与用户确认用户需支付的消费金额,并将代收净额支付给甲方。

2.2.1甲方通过管理账号在乙方系统中确认消费用户提交订单时应享受的优惠,消费用户通过平台在线支付消费款全款时,将自动享受前述优惠。

2.2.2闪恵技术服务费结算:乙方/乙方关联方/乙方合作方按用户通过闪惠功能实际消费数量将代收净额支付给甲方。

2.2.3在用户通过闪惠支付后的24小时内,商户可自主申请退款。闪惠功能代收净额结算款项是截至结款前一日的00:00前对应的款项,每笔结算代收净额不涉及前述24小时内的退款。

2.3预订技术服务
乙方/乙方关联方/乙方合作方向甲方提供在线预订系统、订单处理系统、服务款(货款)代收代付系统等技术服务。具体表现为甲方在乙方/乙方关联方/乙方合作方平台开通在线预订功能,通过乙方平台预订系统实现消费者在线预订。甲方可以委托乙方/乙方关联方乙方合作方代为收取消费者支付的费用。

2.3.1预订技术服务规则
(1)乙方有权通过各种方式(包括但不限于向用户调查、给用户累计积分等)核实甲方是否准确、如实地在商户中心进行用户消费确认。一旦发现甲方未准确、如实确认的,乙方有权随时终止向甲方提供预订技术服务。

(2)为保障用户合法权益,甲方不得通过任何方式向用户明示或暗示不要通过乙方平台进行在线预订。在甲方有接待能力的情况下,不得不接受用户的在线预订。甲方不得出现:甲方告知乙方或乙方平台已显示用户预订成功,但用户在到达甲方后查询不到预订记录或没有包厢。

(3)甲方在乙方平台的在线预订规则、条件、限制等,不得与其他预定渠道的规则、条件、限制等有任何差别待遇。

(4)用户通过乙方平台及任何其他预订方式同时预订的,无论其他方式是否预订成功,甲方仍需按照本合同约定向乙方支付预订技术服务费。甲方无权以任何理由扣除用户订单金额的部分或全部,订单金额与甲方设定的最低消费金额无关。

(5)因乙方无法确定用户是否实际到甲方消费以及实际消费金额,所以商户中心默认用户已经到店消费,甲乙双方按照本合同进行结算。如果在用户预订后甲方在商户中心操作未到店,但用户向乙方提供消费依据的,则甲方仍需按照本合同约定向乙方支付预订技术服务费。

(6)在系统设置的库存数值范围内的订单,均视为甲方接受本次预订。

(7)甲方通过乙方平台进行各种在线预订折扣活动,费用由甲方承担,乙方结算时按照折扣后价格结算,同时甲方支付乙方技术服务费按照折扣后价格结算。

2.3.2预订技术服务用户退款规则
(1)	甲方未接受本次预定;

(2) 消费者预订成功后，在最晚取消可退时间之前取消预订；

(3) 其他情况下，甲方明确同意退还预付款给消费者。


2.4推广技术服务

2.4.1推广技术服务规则
(1) 乙方对甲方文件予以审核，并自主决定是否同意向甲方提供本服务。

(2) 甲方应通过“商户管理平台”，在信息发布前的1个工作日或之前上传相关素材，甲方提供的素材经乙方审核通过后予以发布。

(3)甲方对于本服务的申请和使用的合法性承担保证贵任，乙方对甲方行为及推广内容不承担任何责任和义务，但乙方有权要求甲方提供材料证明其推广内容的合法性。

(4)甲方应对其向乙方提交的一切信息的真实性、合法性、完整性、有效性负责，并独立承担与此相应的法律责任。

(5)若甲方未及时向乙方提供相关推广信息资料，或提供的相关信息资料不符合要求，因而导致实际开始履行日期延迟的，相关服务截止日期不顺延，相关损失由甲方自行承担。

(6)乙方保留对平台和产品进行变更的权利，需要尽到提前告知甲方的义务。

(7)如甲方因其提供的推广内容、产品和服务与他方或用户之间产生纠纷的，甲方应自行独立解决并承担责任，赔偿损失等。如给乙方造成损失的，应予以赔偿。

(8)如对合同约定之酬劳的履行情况存在异议（包括认为存在漏发或任何其他违反本合同规定的发布情况），甲方应在前述服务开通后3个工作日内以书面方式向乙方提出，否则认定为全部服务严格按照本合同的约定推广完毕。

(9)甲方违反本合同约定或本服务相关管理规则的，乙方有权独立决定采取的措施有：
(a)删除推广内容；
(b)对甲方提交的全部推广予以下线或实施采取其他屏蔽措施；
(c)扣除甲方剰余的全部预付款用以賠偿乙方损失，不予退还。剩余预付款不足以赔偿乙方损失的，甲方应予补足；
(d)解除本合同；
(e)其他乙方认为合理的处理方式。

(10)甲乙双方以订单等书面形式确认推广服务产品具体内容。

2.4.2推广技术服务费

(1)推广技术服务费结算方式：甲乙双方按照甲方管理账号在商家中心以填写、勾选、点击等方式确认或甲乙双方后续签订的服务订单所对应的结算标准进行结算。

(2)若甲方账户内有现金剰余款项的，甲方可申请对账户内现金部分剰余款项进行退款，但需同时满足下列条件： 
(a)甲方已填写相关申请文件，并已退回乙方已经开具的发票。
(b)甲方没有任何未处理完毕的事宜，包括但不限于违规处罚、违约赔偿或投诉纠纷。
(c)账户中的非现金部分（包括但不限于赠送的虚拟金、返货、信用等）不可退款。
(d)部分服务可能设置了退款期限限制，甲方在使用这些服务时应当注意其退费规则。
(e)乙方收到甲方退回的完整、有效发票后在次月内，将按照甲方实际消费数额更新开具发票，并进行现金部分剰余款项的退款。
(f)甲方应自行妥善保管发票。甲方理解并同意，若无法退回乙方已经开具的发票，则乙方有权在扣除已开具发票对应的税金后，将剩余款项予以退 回。

2.5其它技术服务
为拓展商户知名度、提高商户交易量，更好的为商户提供服务，乙方可根据市场需求，不断优化双方合作涉及系统及软硬件，并开展多种多样的服务功能，甲方可通过商家中心选择增加相应功能。
2.5.1该类功能包括但不限于：服务/商品的在线预定功能、商户会员管理功能、为商户提供在线排队功能、商品/服务在线抽奖体验功能，具体以商户在商家中心确认功能为准。
2.5.2乙方将对甲方就上述功能的操作及使用进行培训指导，并提供技术支持，因此产生的服务费计算方式及金额，双方通过商家中心确认。

三、	费用及支付方式
3.1甲方确认自甲方信息发布/约定功能上线之日起，每10天乙方/乙方关联方/乙方合作方主动将代收净额中已标记消费金额结算到甲方支付账户。
3.2如遇周末、节假日，则推迟到下一个工作日结算。
3.3合作期满费用结算：兑换券有效期截止日/甲方闪惠/预订信息下线后的第十天，乙方/乙方关联方/乙方合作方按兑换券/闪惠/预订实际消费数将剰余代收净额退还给甲方；合作期满，实际消费数所对应的代收净额总金额低于乙方/乙方关联方/乙方合作方已支付代收净额时，甲方应按照实际兑换券消费数/闪惠/预订实际消费，向乙方/乙方关联方/乙方合作方支付相应款项。
3.4基于上述服务，甲方应按照约定支付服务费。甲方同意井确认，授权乙方/乙方关联方/乙方合作方实时于代收款项中扣除上述服务费.将代收净额结算给甲方。
3.5本合同涉及的推广技术服务费，由甲方按照双方后续签订的推广技术服务订单，在推广技术服务上线前将款项付给乙方。未及时付款造成的损失将由甲方承担。
甲方可选择以下方式中的一种进行付款：
3.5.1银行汇款，将款项付至甲乙双方约定的乙方账户；
3.5.2对接乙方指定账户的POS机打款；
3.5.3在线支付，甲方通过商家中心自助付款；
3.5.4从团购/闪惠资金账户转入（如果甲方因未及时在商家中心操作导致推广技术服务费不足，乙方有权暂停甲方推广技术服务）。
3.6甲方存签约过程中填写、勾选、点击等任何方式确认的银行账号为甲方指定的结算账号，甲方确保合法拥有该账户。甲方前述账号信息如有变更，双方应另行书面约定。
3.7如甲方需向乙方支付款项，仅可支付至乙方确认的乙方对公账户中。乙方不会要求甲方将款项支付至任何对私账户。
乙方账户信恵：
开户名：上海鹰东科技发展有限公司
账号： 4572 7699 2207
开户行：中国银行上海市谷阳北路支行
乙方收到甲方付款后向甲方开具增值税发票（技术服务费）

四、	商家中心管理账号
4.1甲方在乙方商家中心平台拥有管理账号，该管理账号对应唯一组用户名及密码。甲方只能以该管理账号登陆商家中心，才能在商家中心进行各种操作。甲方应当妥善保管管理账号的用户名及密码，甲方因用户名及密码保管不当造成的经济损失，由甲方自行承担。
4.2甲方商家中心管理账号的权限包括但不限于变更、确认如下事项：双方合作门店信息；双方合作多门店对应的结算账号；双方各合作方案涉及的服务费；双方合作的各项技术服务；各项技术服第的具体内容等。
4.3甲方商家中心管理账号的效力：甲方管理账号在商家中心以填写、勾选、点击等任何方式确认的内容，都是本合同的重要组成部分，与本合同具有同等效力。甲乙双方均应当履行双方在商家中心通过电子方式约定的内容，否则即为违约。甲方的管理账号在商家中心平台进行的一切操作均视为甲方的操作，甲方应当就此承担全部责任与法律后果。

五、甲方权利义务
5.1甲方应遵守本合同之约定及平台公告发布的与甲方履行本合同项下义务相关的各项规则。
5.2甲方应保证其为一家依据中国法律合法成立并有效存续的法人或其它商事主体，能够独立承担法律责任，并具有履行本合同所需的一切权利及能力；同时甲方应当提供盖章的资质证明复印件，如涉及特殊行业爲耍特定的资质或许可文件等的，甲方也应予以提供前述资料包括但不限于甲方营业执照、行政许可文件、商品/服务说明、信息文案所需资料（包含图片、说明、门店、商家介绍）等。甲方因资质或提供的甲方信息问题而致使本合同无法正常履行的，由此产生的一切结果由甲方负责，甲方还需赔偿乙方/乙方关联方/乙方合作方因此遭受的损失。
5.3甲方向用户提供商品/服务时，应确保与甲方信息一致，甲方在兑换券/优惠信息有效期内，应按照本合同约定、订单及乙方相关规则接受用户的预约和消费。因甲方原因造成的用户投诉、经济损失等相关后果均由甲方承担。
5.4甲方应合法经营，且提供的商品/服务应符合国家法律、法规、规章的规定。如因甲方行为或甲方提供的商品/服务造成用户损失的，由甲方承担相应的赔偿责任。如乙方/乙方关联方/乙方合作方基于前述情况向消费者先行赔付的，乙方有权进行追偿。
5.5甲方应按照平台价扣除商家自促费用后的金额为用户开具相应金额的发票。
5.6为防止甲方虚标价格误导用户，甲方应保证合作期间经营场所内实际销售价格不低于平台价，且不得唆使或诱使持兑换券消费的用户放弃兑换券而改为使用现金或其他形式消费，否则乙方有权立即终止本合同并要求甲方按照本合同约定承捋违约责任。
5.7对于虽已成交但并未实际消费的兑换券，无论该兑换券有效期是否届满，甲方同意乙方/乙方关联方/乙方合作方均有权留存该兑换券所对应的款项,并根据订单的约定及用户的要求与意愿，处置相应款项。
5.8甲方应在用户消费时用时通过商家中心验证兑换券，因甲方懈怠于履行验证义务而导致的一切损失由甲方自行承袒。
5.9甲方承诺并保证甲方対其使用的商品、商标、品牌、图片等享有合法权利或合法授权，不会侵犯他人的知识产权、企业名称权等权益；且甲方承诺乙方/乙方关联方/乙方合作方不会因展示甲方上述信息而遭受来自第三方的任何投诉、抗辩及争议.否则相应责任均由甲方承担。
5.10无论本合同因任何原因终止，甲方承诺立即停止以任何方式使用乙方/平台相关的商标、标识、网站名称、网站内容等。
5.11甲方同意用户通过平台发布的针对甲方的评论、照片等，纯属用户个人意见，与乙方立场无关，乙方不承担任何责任。
5.12甲方应按照合同约定、页面信息及平台方规则向用户提供商品/服务，否则由此引起用户投诉或给用户/乙方/乙方关联方/乙方合作方造成损失的,相应责任均由甲方承担，且乙方有权解除合同并要求甲方按本合同预定支付违约金。
5.13甲方不得通过任何手段、以任何方式自行或者委托他人进行如下行为（包括但不限于虚拟交易、虚拟验证、自买自卖、伪造网络用户事实消费、体验、刷单等违反平台规则、损害乙方/乙方关联方/乙方合作方利益的行为，或伪造、仿冒等其他违反国家法律法规的行为，或其他违反公平竞争诚实信用原则与商业准则的行为），否则，乙方有权解除合同.在代收净额中扣除上述行为给乙方/乙方关联方/乙方合作方造成的损失，并要求甲方按照本合同约定支付违约金。
5.14如在合同履行期限内，因甲方原因造成的方案、项目或合同中止（包括但不限于服务方案已下线或停止营业），甲方应及时通知乙方。如因甲方怠于通知造成的一切纠纷和贵任（包恬但不限于用户投诉、行政机关处罚等）由甲方承担，若由此给乙方/乙育关联方/乙方合作方造成经济损失，甲方应进行赔偿。
5.16甲方保证推广内容中不含有任何违反中国有关法律、法规的内容，包括但不限于危害国家安全、淫秽色情、虚假、违法、诽谤、恐吓或骚扰、侵犯他人知识产权、人身权或其他合法权益或利益以及有违公序良俗的内容。
5.17甲方保证其在推广的内容真实，不存在假冒、伪劣等欺骗消费者权益的信息，并具备国家法律法规或者部门规章要求的相应资质。
5.18甲方保证其推广的商品和/或服务符合国家、行业的质量标准，并通过了相应的行政审批。
5.19甲方保证其应在乙方要求的时间内提交与推广内容相关的证明文件，包括但不限于商标权证明或授权文件、著作权证明或授权文件、肖像权授权证明、批准文号、检验报告以及其他用以证明其推广内容真实、合法与有效的证明材料。
5.20因甲方原因造成的用户投诉、经济损失等相关后果均由甲方承担，造成乙方损失的，甲方赔偿。
5.21甲方不得通过任何手段、以任何方式自行或者委托他人进行违法或者作弊行为以获得不正当交易机会。

六、乙方权利义务
6.1乙方应向甲方提供本合同约定的技术服务及其他相关服务。
6.2为更好的推荐甲方及其商品/服务，以提升甲方的知名度/订单量，乙方可通过适当的方式和渠道说相关宣传介绍，并进行相关推荐/推广。甲方对上述行为予以认可，并授权乙方/乙方关联方/乙方合作方就甲方及其相关门店的名称、LOGO、图片、文字、门店、会员优惠等信息进行使用。
6.3乙方有权根据本合同的约定向甲方收取服务费，并且有权先从代收款项中直接扣除该等服务费。
6.4乙方有权对甲方拟在平台发布的内容、信息进行形式审核，必要时乙方有权依据法律法规、政策规定及平台规则予以删改或拒绝发布。
6.5除展示信息内容或文字确有错误外，甲方不得要求乙方修改已发布于平台上的甲方信息。
6.6如用户就甲方商品/服务向乙方/平台实际经管者投诉，乙方经核实后，有权要求甲方配合解决该投诉，在该投诉未解决之前乙方/乙方关联方/乙方合作方有权拒绝向甲方结算涉及投诉的代收净额，待投诉解决后再行结算。
6.7乙方有权升级、更新商家中心系统，如有变更，乙方将通过前述系统以公告形式做出通知。
6.8乙方有权对甲方提供的素材进行审查，若甲方所提供的素材不符合国家法律法规及本合同约定要求，乙方有权要求甲方及时进行纠正；若因甲方拒不更改，乙方有权停止发布甲方信息推广，甲方承担相应违约责任。前述审查权仅为形式审查，并不视为乙方应对甲方产品内容承担任何的连带责任。
6.9推广过程中，甲方可以修改相关物料内容，但所有物料内容应该符合乙方的有关推广内容审核规则，且应提前3日向乙方提供,经乙方确认后方可修改。
6.10甲方或甲方提供的推广内容受到行政司法机关违法调查或受到第三方投诉时，乙方有权随时停止向甲方提供网络推广服务（包括但不限于停止账户、下线物料等），或选择终止本合同。若乙方选择终止本合同，本合同自乙方向甲方发出终止通知之日起解除，甲方已支付款项不予退还。甲方尚未支付款项的，甲方按本合同所约定全部推广款项向乙方支付。
6.11本合同有效期内，乙方有权以提前15天通知的方式，提前单方终止本合同，且此情形不视为乙方违约，乙方无须承接任何违约责任。
七、违约责任
7.1除非本合同另有约定，如甲方违反诚信原则，或违反本合同的任一条款或平台上的任何规则，或甲方违反其在本合同的履行中做出的任何承诺和保证，或甲方提供的资质、证照等信息不属实，则乙方/乙方关联方/乙方合作方有权停止向甲方提供服务和结算代收净额，并有权要求甲方在一定期限内纠正违约行为。如甲方在乙方要求的期限内纠正违约行为后符合本合同约定的，乙方应恢复向甲方提供服务并结算代收净额；如甲方在乙方要求的期限内拒绝纠正或纠正后仍不符合本合同约定的，乙方有权单方解除本合同，并有权要求甲方按照自本合同生效之日起累计至甲方发生违约行为之日的代收款项总额和甲方支付的推广费用总额的30%向其支付违约金。
7.2因乙方未能按照合同约定履行义务包括未及时完成资金结算，且在甲方要求的期限内拒绝纠正或纠正后仍不符合本合同约定的，应承担因此给甲方造成的损失。

八、保密义务
除另有约定外，本合同任何一方均应对其获得的对方之业务、经营、财务状况和其他保密资料予以严格保密，不得以任何形式向任何第三方披露。否则，因此给其他方造成任何损失的，违约方应承担因此给守约方造成的全部损失。保密义务在合同有效期间及终止后始终有效，不因本合同其他条款整体或部分无效、被撤销而失效。

九、合同终止和解除
本合同期限届满或本合同约定的其他终止情形发生时，本合同终止。除合同另有约定外，合同履行过程中，一方经书面通知对方且经双方协商一致后,可解除本合同。本合同终止或解除后：
9.1乙方有权删除平台上已发布的甲方信息，且有权拒绝提供相关信息;
9.2本合同终止前甲方已与用户达成的尚未履行完毕的订单，甲方应按照本合同及订单的约定继续履行相应义务;
9.3如乙方已经按照协议规定提供的推广服务，甲方应按本合同规定的服务费就已经提供的服务向乙方支付费用;
9.4按照相关法律法规，甲方理解并同意乙方保存甲方资质信息、商品信息、交易记录等相关资料。

十、免责条款
10.1因战争、自然灾嘗、政府行为、互联网系统故障、互联网通讯提供商故障等不可抗力因素或第三方原因导致乙方不能履行本合同项下义务，乙方无须承担责任。
10.2甲方同意，因下述两种特殊情形导致乙方不能按时发布信息推广的，不视为乙方违约:
10.2.1甲方理解，基于市场整体利益考虑及经营需要，乙方可能不定期对服务内容、版面布局、页面设计等有关方面进行调整，如因上述调整而影响甲方信息推广的发布（包括发布位置和/或发布期间等），甲方将给予充分的谅解，乙方则应该尽可能将上述影响减少到最低程度；
10.2.2甲方理解，为了信息推广发布媒体正常运行，乙方需要定期或不定期地进行停机维护，如因此类情况而造成甲方信息推广不能按计划发布，甲方将予以谅解，乙方则有义务尽力避免服务中断或将中断时间限制在最短时间内。

十一、法律适用及争议解决条款
11.1本合同的成立，有效性、解释、履行、签署、修订和终止以及争议的解决均应适用中华人民共和国法律。
11.2因本合同引起的与本合同有关的任何争议，双方应协商解决。协商不成的，任何一方均可将争议提交至乙方所在地法院。

十二.附则
12.1若乙方向甲方发出书面的通知，乙方可不经过甲方同意向其关联公司部分或者全部转让本合同。本合同对双方各自的继承人和受让人有约束力。
12.2与本合同相关的所有通知，双方均可采用书面、邮件或者商家中心操作任一形式变更和确认。
12.3本合同如果有未尽事宜，应另行签订书面补充合同。任何形式的口头协议均无效。
12.4本合同附件是合同不可分割的部分，与本合同具有同一效力。
12.5本合同由双方签订后，于甲方的团购、闪惠、预定、推广等相应该服务信息首次发布之日起生效，有效期一年。
12.6合同到期后，在保留合同条款和相应约定的情形下，经乙方同意有效期自动顺延，每次顺延期为一年。
（以下无正文）
甲方：

乙方：上海鹰东科技发展有限公司

签约日期：`

export const merchantServiceAgreement = `商户服务协议

特别声明：


在签署本协议前，您确认已经仔细阅读并完全同意《车主点评用户服务条款》之全部内容。同时，作为商户，您承诺仔细阅读并全面遵守本协议之全部内容（特别是以粗体和/或下划线等突出显示方式展示的内容）。如果您对本协议的条款有疑问的，请通过车主点评客服渠道进行询问，车主点评网将向您解释条款内容。如果您不同意本协议的任意内容，或者无法准确理解车主点评网对条款的解释，请不要同意本协议或使用本协议项下的服务，否则，表示您已接受了以下所述的条款和条件，同意受本协议约束。届时您不应以未阅读本协议的内容或者未获得车主点评网对您问询的解答等理由，主张本协议无效，或要求撤销本协议。考虑到互联网信息服务性质和内容的不断发展和演进，您同意车主点评网有权对本协议条款进行修改，并将修改后的协议以在线公布、通过您注册时提供的通讯工具发送或者其他任何合理方式通知您。您同意承担及时查阅最新协议的义务。在该等修改发生后，若您不同意该最新协议，您应放弃注册、停止使用或主动取消本公司提供的服务。您继续使用本公司提供的服务的行为将被视为对该最新协议的全部内容予以接受和同意。如车主点评网需要商家与车主点评网另行签署协议的，则商家还应遵守另行签署的协议，若本协议与商家另行签署协议不一致的，以双方另行签署的协议为准。

第一条签约背景
为更好的为车主点评网商户提供服务,同时为更好的规范商户认领现有商户信息（包括新发布商户信息）、发布与商户相关的内容信息、推广信息行为，以及更好的使用车主点评网提供的基于商户中心的其他增值服务，特签署本协议。


第二条签约主体
本协议由“车主点评网”与通过认领现有商户信息、新发布商户信息或者其他方式获得车主点评网授权使用车主点评网商户中心服务功能的商家签署。第三条协议订立、生效及其适用范围
3.1 您通过网络页面点击确认本协议或以勾选等其他方式选择接受本协议，包括但不限于未确认本协议而使用了车主点评网商户中心服务功能，均表示您与车主点评网已就本协议达成一致并同意接受本协议的全部约定内容。
3.2 本协议自您确认或使用本协议之时即生效。
3.3 车主点评网《法律声明》提及和/或链接的所有在线条款作为本协议不可分割的组成部分。您对本协议的接受将视为对前述所有在线条款的完全理解和接受。
3.4 您了解并同意，根据您实施的不同行为，您将受到本协议不同条款的约束。


第四条定义
4.1 车主点评网:网址为www.chezhudianping.com 的网站。
4.2 商户信息：由车主点评网用户、商户发布的商户基本信息，包括但不限于商户名称、地址、联系方式等，简称COI。
4.3 商户认领：指商户主张现有COI 对应的实体商户为其所经营管理，或将其经营管理的实体商户在车主点评网发布新的COI，从而取得该COI 一定的管理权限并使用该COI 商户中心服务功能的行为。
4.4 商户：通过商户认领功能取得该COI 一定的管理权限并使用该COI 商户中心服务功能的实体商户的经营管理者。
4.5 商户中心：车主点评网提供给商户的用于管理其COI 的软件后台。


第五条  商户服务的内容及功能
车主点评网通过商户中心后台管理系统为商户提供基础服务（包括商户信息编辑、维护、用户点评回应等），现有以及后续可能提供的增值服务、推广技术服务（包括但不限于预约预定服务、电子优惠券推广技术服务、电子会员卡推广技术服务、团购服务等）。商户接受除商户中心基础服务之外的增值服务、推广技术服务时，应当与车主点评网（或具体服务提供商）以书面或在线签署的方式另行签订服务协议以明确双方的具体权利义务。
第六条 如您的账户同时符合以下条件，则车主点评网有权利终止您的账户。这将导致您的账户不能再登录车主点评网和或商户中心后台管理系统，相应服务亦同时终止：
（一）连续六个月未登录；
（二）不存在未到期的有效业务；
（三）终止您的账户和服务的行为不违反相关法律法规的强制性规定。

第七条商户诚信义务
您应遵守法律、法规、规章和政策的规定，努力通过优质的服务获得消费者真实、客观、优质评价。您再次确认已经仔细阅读并充分理解和自愿同意《车主点评网商户诚信公约及管理办法》等规则。您知悉，在您实施了任何不诚信行为后，不仅面临车主点评网根据《车主点评网商户诚信公约及管理办法》等规则对您的处罚，还应当自行承担其他法律责任。因您的不诚信行为给车主点评网造成的任何损失，您还应承担全部赔偿责任。

第八条商户陈述与保证
8.1 商户承诺其是其认领COI 对应的实体商户的真实经营管理者；
8.2 商户承诺其是其发布新的COI 对应的实体商户的真实经营管理者；
8.3 商户承诺其在商户认领环节向车主点评网提交的证明材料合法、真实、准确详尽。否则商户承诺独立承担因此导致的相应责任及后果，使车主点评网免责；
8.4 商户承诺其通过商户中心发布、编辑、更新的商户信息（包括但不限于文字、图片等）真实准确，并且不侵犯任何人的合法权益；
8.5 商户承诺在其接受除商户中心基础服务之外的增值服务、推广技术服务时，严格遵守相关服务协议的相关约定；
8.6 商户同意在使用车主点评网商户服务的同时接受车主点评网向其登记的电子邮件、手机、通信地址发送商业信息。
8.7 若商户为商品销售者，则其确认已经仔细阅读、充分理解并自愿遵守网络购买商品七日无理由退货暂行办法之全部规定；商户认可并授权车主点评网按照《车主点评网争议调解处理规范》之规定进行相关争议调解和解决。
8.8 商户确认其已经仔细阅读、充分理解并自愿遵守《车主点评网商户直播行为规范》之全部规定。
8.9 若商户对车主点评网实施侵权行为或者商户违反与车主点评网的约定导致车主点评网受损，且该商户有任何存储于车主点评的付款、预付款、应收款等资产或者利益，则该商户同意并授权车主点评从该资产或者利益中优先扣除该商户之侵权或者违约行为应支付给车主点评的赔偿金，以履行其赔偿义务。
8.10 商户知悉并同意：商家因其经营需要、履行本协议义务而向车主点评网提交的任何信息和数据，以及商家在经营过程中产生的交易数据、用户点击、店铺及商品评价数据，车主点评网有权在本协议终止后继续保留，同时，无论本协议终止前还是终止之后，车主点评网均有权合理使用，使用方式包括但不限于依据数据进行市场分析和调研，或就分析、调研结果以产品形式售卖或免费提供给第三方；商家进一步知悉并同意：该等数据，无论本协议终止前还是终止之后，车主点评网均无义务返还商家、也无义务删除原始数据及其备份、同时无义务就使用该数据的行为向商家支付任何费用。

第九条车主点评网的权利及责任限制
9.1 车主点评网致力于不断提高商户服务的产品与技术质量、优质的用户体验以及系统的安全稳定；
9.2 车主点评作为商户服务的技术服务提供商将按“现状”和按“可得到”的状态提供服务。车主点评网在此明确声明对商户服务不作任何明示或暗示的保证，包括但不限于对该服务的可适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途之类的保证、声明或承诺。
9.3 在所适用的法律允许的范围内，车主点评网不做任何明示的或默示的声明，也不给予任何明示的或默示的保证或条件，包括但不限于：
（1）关于适用性、特定用途适用性、准确性和无侵权行为的任何保证或条件；
（2）在服务使用过程或行业惯例中产生的任何保证或条件；
（3）在访问或使用商户服务时不受干扰、没有错误的任何保证或条件；
（4）在任何书面或者口头的帮助、答疑过程中所作出的陈述、指导或者展示。
9.4 在法律允许的最大免责范围内，在任何情况下车主点评网均不对源于、基于或因本协议或使用商户服务而导致的数据丢失和/或任何损害赔偿负责，包括但不限于直接的、间接的、特殊的、附带性的或惩罚性的损害赔偿或其他任何形式的损害赔偿，即使车主点评网已被告知此等损害赔偿的可能性。
9.5 车主点评网对商户的任何通知，不论是口头还是书面的，均不表示车主点评网承担在本协议陈述以外的任何担保责任。
9.6 对下列情形，车主点评网在法律允许的最大免责范围内予以免责：
（1）并非车主点评网的故意或过失而导致服务或者软件、信息无法使用。
（2）由于商户或第三人的故意或过失导致其及/或任何第三方遭受损失。
（3）因车主点评网合理控制范围以外的原因，包括但不限于不可抗力、政府行为和电力电信中断等，导致车主点评网未能履行或未能完全履行本合同的。
9.7 在法律允许的最大免责范围内，车主点评网保留随时修改或中断服务而不需通知商户的权利，不需对商户或任何无直接关系的第三方负责。除非法律另有规定或者双方另有特别约定。
9.8 如商户违反本协议第八条约定的承诺及保证，车主点评网有权采取一切必要的措施，包括但不限于：删除商户发布的内容、取消商户在网站获得的星级、荣誉以及虚拟财富，暂停或查封商户帐号，取消因违规所获利益，终止本服务协议，乃至通过诉讼形式追究商户法律责任等。如《车主点评网商户诚信公约及管理办法》等规则中针对特定商户行为有更为严厉的处罚规定，则商户同意车主点评有权根据该更为严厉的处罚规定对涉事商户予以处罚。
9.9 商户认可并承诺，车主点评网内所有用户所发表的用户点评仅代表该用户个人观点，并不表示本网站赞同其观点或证实其描述，商户不会要求本网站承担用户点评引发的任何法律责任。商户确认已经仔细阅读并充分理解和自愿同意车主点评网《平台点评规则》的全部规定。

第十条知识产权及其它权利
10.1 您确认，您已经明确阅读，充分理解并自愿遵守本网站的《知识产权声明》。
10.2 任何商户接受本协议，即表明该商户主动将其在任何时间段在本站发表的任何形式的信息的著作财产权，包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权等，以及应当由著作权人享有的其他可转让权利无偿独家转让给车主点评网运营商所有，同时表明该商户许可车主点评网有权利就任何主体侵权而单独提起诉讼，并获得全部赔偿。本协议已经构成《著作权法》或者相关法律法规所规定的书面协议，其效力及于商户在车主点评网发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。
10.3 车主点评网拥有此网站内容及资源的版权,受国家知识产权保护,享有对本网站各种协议、声明的修改权；未经车主点评网的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其他第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照车主点评网的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。
10.4 车主点评网未向任何第三方转让本网站或其中的任何内容所相关的任何权益或所有权，且一切未明确向任何第三方授予的权利均归车主点评网所有。未经本协议明确允许而擅自使用本网站任何内容、服务或资料的，构成对本协议的违约行为，且可能触犯著作权、商标、专利和/或其他方面的法律法规，车主点评网保留对任何违反本协议规定的第三方（包括单位或个人等）提起法律诉讼的权利。

第十一条适用法律与争议解决
11.1 因商户使用车主点评网站商户服务而引起或与之相关的一切争议均应依照中华人民共和国大陆地区法律（不包括冲突法）予以处理，并以上海市松江区人民法院为第一审管辖法院。
11.2 如本协议的任何条款被视作无效或无法执行，则上述条款可被分离，其余部份则仍具有法律效力。
11.3 车主点评网于商户过失或违约时未行使本协议规定的权利的，不得视为其对商户的其他或以后同类之过失或违约行为弃权。`

export const privacyPolicy = `车哪修车主点评隐私政策

更新日期：2019年3月 20日
生效日期：2019年 3月 20日

车哪修车主点评（以下或称“我们”）非常注重保护用户（“您”）的个人信息及隐私，我们深知个人信息对您的重要性，并将按照法律法规要求和业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。我们希望通过本隐私政策向您清晰地介绍在使用我们的产品\服务时，我们如何处理您的个人信息，以及我们为您提供的访问、更正、删除和保护这些信息的方式。

本政策将帮助您了解以下内容：
1、我们如何收集和使用您的个人信息；
2、我们如何使用 Cookie和同类技术；
3、我们如何共享、转让、公开披露您的个人信息；
4、我们如何保存和保护您的个人信息；
5、您如何管理您的个人信息；
6、未成年人的个人信息保护；
7、通知和修订；
8、如何联系我们；
9、附录。


【特别提示】请您在使用我们提供的各项产品\服务前，仔细阅读并充分理解本《隐私政策》（重点内容我们已将字体加粗请您特别关注）并作出相应选择。一旦您使用或继续使用我们的产品\服务时，即意味着您同意我们按照本隐私政策处理您的相关信息。


如对本隐私政策有任何疑问，您可以通过车主点评网站（如 https://www.chezhudianping.com）\App上提供的联系方式\客服系统与我们联系。

车主点评所有的产品\服务（包括车主点评提供的产品\服务及未设独立隐私政策的车主点评关联方提供的产品\服务）均适用本隐私政策。

“车主点评的产品\服务”是指车主点评网络及技术服务提供者通过下述途径向您提供的产品\服务：包括但不限于车主点评客户端以及相关微信开放平台账号或小程序等。此外，针对某些特定的产品\服务，我们还将制定特定的隐私政策，并在向您提供这些特定的产品\服务之前加以说明。如相关特定的隐私政策与本隐私政策有不一致之处，适用该特定隐私政策。请您注意，本政策不适用于您通过我们的产品\服务而接入的其他第三方产品\服务(“其他第三方”，包括但不限于您的交易相对方、任何第三方网站以及第三方服务提供者)，具体规定请参照该第三方的隐私政策或类似声明。

一、我们如何收集和使用您的个人信息

我们会遵循正当、合法、必要的原则，出于本政策所述的以下目的，收集和使用您在使用服务过程中主动提供或产生的个人信息:帮助您成为我们的用户，向您提供产品\服务，为您优化用户体验，为您提供安全保障:

（一）帮助您成为我们的用户

为遵守法律法规的要求，以及向您提供更个性化、更便捷的服务，在您注册成为车主点评用户时，您需要至少提供手机号码以创建车主点评账号，并完善相关的网络身份识别信息（如头像、昵称及登录密码等）；如果您仅需使用浏览、搜索等功能，您无需注册成为我们的用户以及提供上述信息。

在提供账号信息的过程中，如果您愿意额外补充如下个人信息，将有助于我们向您提供更为个性化的服务：包括您的性别、生日、常居地、家乡、喜好、家庭信息以及您爱车的信息等。如果您不提供该等信息，不会影响您享受车主点评服务的基本功能。

（二）向您提供产品\服务

1、您向我们提供的个人信息
预订\下单：您在车主点评上预订\下单维修、保养、美容、洗车等团购服务时，您可能需要提供联系人信息（姓名、性别、电话号码等）、地址信息、车型信息等；

信息发布：您在车主点评上主动对商家的产品/服务进行评价或发布其他内容（如分享心情、状态、签到等信息）时，我们将收集您发布的信息，并展示您的昵称、头像和发布内容等。如您选择以匿名方式发布评价信息时，我们将不展示您的昵称、头像。您还可以通过主动上传图片、视频等方式授权车主点评访问您的相机、照片和麦克风，以便于您通过拍照、拍视频、上传照片或上传视频等方式发布内容。当您需要关闭该功能时，大多数移动设备都会支持您的这项需求，具体方法请参考或联系您移动设备的服务商或生产商。

支付：您在车主点评上支付时，您可以选择车主点评及其关联方或者与车主点评合作的第三方支付机构（如微信支付、支付宝等支付通道）所提供的支付服务。支付功能本身并不收集您的个人信息，但我们需要将您的车主点评订单信息及对账信息与这些支付机构共享以确认您的支付指令并完成支付。

客服：当您与我们的客服取得联系时，我们的系统可能会记录您与客服之间的通讯记录，以及使用您的账号信息以便核验身份；当您需要我们提供与您订单相关的客户服务时，我们可能会查询您的相关订单信息以便给予您适当的帮助和处理；当您需要客服协助您修改有关信息（如联系方式）时，您可能还需要提供上述信息外的其他信息以便完成修改。

您可以通过车主点评为其他人预定各类产品\服务，并提供该实际服务接收人的有关信息，此前请您确保已取得相关人的授权。

为展示您账户的订单信息，我们会收集您在使用我们服务过程中产生的订单信息用于向您展示及便于您对订单进行管理。

您在车主点评上生成的订单中，将可能包含您的身份信息、联络信息、支付信息等，这些都属于敏感信息，请您谨慎向他人展示或对外提供，我们也将会在展示订单信息时，在保证信息可用性的基础上尽量做去标识化处理。

2、我们在您使用服务过程中可能收集的个人信息


为了满足法律法规及提供服务的基本要求，保障您的账号安全与系统运行安全，我们会收集您在使用我们服务过程中产生的相关信息，包括：

（1）日志信息。当您使用我们提供的产品\服务时，我们会自动收集您使用我们服务的详细情况，并作为有关的网络日志保存，包括但不限于您的 IP地址、浏览器的类型、使用的语言、操作系统的版本、访问的日期和时间、及您请求的网页记录等信息。
（2）位置信息：为了便捷您发现周边的汽车实体店服务信息，我们会基于您的地理位置为您提供服务。当您开启设备定位功能并使用我们的服务时，我们可能会收集和使用您的位置信息，以实现我们为您提供本地周边汽车服务的目的（如您不需要手动输入自身地理位置就可获得相关服务，以及估算商家与您之间的实际距离方便您进行消费决策等）。我们会使用有关技术对您的实际位置进行定位，这些技术包括IP地址、GPS以及能够提供相关信息的Wi-Fi接入点、蓝牙和基站等传感器技术。请您注意，大多数移动设备都允许您关闭定位服务，具体方法建议您参考或联系您移动设备的服务商或生产商，一旦您通过系统授权关闭定位功能，停止我们对您位置信息的收集，您将可能无法使用我们基于地理位置为您提供的服务，或者无法达到相关服务的预期效果。

（3）设备信息。我们可能会根据您在软件安装及使用中的具体权限，接收并记录您在接受我们服务过程中使用的相关设备信息，例如设备型号、唯一设备标识符、操作系统、分辨率、电信运营商等软硬件信息等。对于从您使用相同车主点评账号登录各种设备上收集到的信息，我们可能会将它们进行关联，以便我们能在这些设备上为您提供一致的服务。

3、我们可能间接收集到的您的个人信息为能向您提供更优质的服务，同时为能确认交易状态及为您提供售后与争议解决服务，经您授权后我们会通过您选择的交易对象和交易直接涉及的第三方信息系统、支付机构等收集与交易进度相关的您的交易、支付等信息，以便于我们处理您的订单并保证服务的顺利完成，或者更好地预防诈骗、刷单等恶意行为。我们会依据法律法规的要求以及与第三方的约定，经您授权后向车主点评的关联方、合作伙伴等获得您的有关信息，并对其信息来源的合法性进行确认后使用您的这些信息。如您在授权使用第三方账号登录时，我们会从第三方获取您共享的账号信息（如头像、昵称等），并在您同意本隐私政策后将您的第三方账户与车主点评账户进行绑定。

（三）改进我们的产品\服务为维护、改进我们的产品或服务质量，向您提供个性化的服务，我们可能会在符合法律规定并根据您具体授权的情况下收集并使用如下信息：

1、我们可能会收集您的订单信息、浏览及搜索信息、行为偏好、位置信息等，以及将您在车主点评上使用某项服务中提供的信息与来自其他服务中的信息结合起来，进行综合统计、分析以形成用户画像，用来向您推荐或展示您可能感兴趣的产品\服务信息，或者通过系统向您展示个性化的第三方推广信息。包括在App页面向您推送消息通知，为您提供智能推荐，给您发送推广短信等。

如您不希望收到App页面上的消息通知，可以在首次安装 App时拒绝接收消息通知，或者在移动端操作系统中的“通知”中心关掉对应的通知功能；如您不希望接受我们的智能推荐服务，可以自主选择按照距离、好评、价格等方式进行排序；如您不希望接收我们给您发送的推广短信，可通过信息中相应的退订功能进行退订。当您选择退出定向推送后，可以按照本隐私政策中第五部分有关删除您的个人信息的路径删除您的相关个人信息。

2、我们可能会收集您在参与产品\服务调查时主动向我们提供的信息，以及您与我们的关联方、合作伙伴之间互动时提供的相关信息，以便于您追踪订单情况、发起用户投诉以及我们优化客户服务的质量与流程。

3、我们可能将业务中收集的个人信息用于统计分析和改进运营，例如通过您所在的位置、偏好等进行统计分析，从而改进我们的产品、服务或营销计划；又如为改进我们系统而进行的技术改造、网络维护、故障排除、内部政策与流程制定、生成内部报告等。

4、您可以授权（通过本隐私政策及独立的《信息授权使用协议》等）使用我们的服务创建交流与分享功能，并允许车主点评获取您手机或其他第三方社交平台中的通讯录信息和公开信息（头像、昵称等），从而使您及您通讯录中同样授权开通此项功能的联系人，能够在车主点评上分享有关内容（头像、昵称、评价信息等）以实现互动功能。您还可以通过我们的服务邀请尚未开通分享功能的联系人开通该功能。此项功能您可以在好友设置中关闭，一旦关闭您将可能无法实现与您的好友在车主点评进行分享交流，但不会影响您享受车主点评服务的基本功能。

（四）为您提供安全保障
为提高您使用我们提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，我们可能会使用或整合您的个人信息以及我们的关联方、合作伙伴取得您授权或者依法共享的信息，根据您的使用习惯和常用软件信息等来综合判断您的账号及交易风险，包括验证身份，预防、发现、调查可能存在的欺诈、网络病毒、网络攻击等安全风险以及违反我们或关联方协议、政策或规则等行为，以保护您、其他用户、我们或关联方的合法权益，并记录一些我们认为有风险的链接(“URL”)。

（五）其他用途
我们将信息用于本政策未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的时，会单独征求您的授权同意。

（六）请您知悉，以下情形中，我们收集、使用个人信息无需征得您的授权同意：
1、与国家安全、国防安全有关的；
2、与公共安全、公共卫生、重大公共利益有关的；
3、与犯罪侦查、起诉、审判和判决执行等有关的；
4、出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
5、所收集的个人信息是个人信息主体自行向社会公众公开的；
6、从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；
7、根据您的要求签订合同所必需的；
8、用于维护所提供的产品与/或服务的安全稳定运行所必需的，例如发现、处置产品与服务的故障；
9、为合法的新闻报道所必需的；
10、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；
11、法律法规规定的其他情形。

请注意，无法与任何特定个人直接建立联系的数据，不属于个人信息。如果我们将无法与任何特定个人建立联系的数据与其他信息结合用于识别自然人个人身份，或者将其与个人信息结合使用，则在结合使用期间，此类信息将被视为个人信息。

二、我们如何使用 
Cookie和同类技术
（一）Cookie的使用为确保网站正常高效运转、为您获得更轻松的访问体验、向您推荐您可能感兴趣的内容，我们会在您的设备终端\系统上存储名为 
Cookie的小数据文件。Cookie会帮助您在后续访问我们网站时调用您的信息，简化您填写个人信息(例如一键登录等)的流程;为您提供安全下单的偏好设置;帮助您优化对广告的选择与互动;保护您的数据安全等。我们不会将 Cookie用于本隐私政策所述目的之外的任何用途。您可根据自己的偏好管理或删除Cookie。您可以清除计算机或移动设备上保存的所有Cookie，您有权接受或拒绝Cookie。大多数浏览器会自动接受Cookie，但您通常可根据自己的需要来修改浏览器的设置以拒绝Cookie;另外，您也可以清除软件内保存的所有Cookie。但您可能因此无法完全体验我们某些便捷性和安全性的服务功能。

（二）网络 
Beacon和同类技术的使用除Cookie外，我们网页上常会包含一些电子图象(称为"单像素"GIF文件或"网络Beacon")等其他同类技术，它们可以帮助网站计算浏览网页的用户或访问某些Cookie。我们使用网络Beacon的方式有:

(1)我们通过在我们网站上使用网络Beacon，计算用户访问数量，并通过访问Cookie辨认注册用户。
(2)我们通过得到的Cookie信息，可以在我们网站提供个性化服务。
三、我们如何共享、转让、公开披露您的个人信息
（一）共享
1、我们不会与车主点评以外的任何公司、组织和个人共享您的个人信息，但以下情况除外：
（1）事先获得您明确的同意或授权；
（2）基于法定情形下：根据法律法规的规定、诉讼争议解决需要，或行政、司法等有权机关依法提出的要求；
（3）与关联方共享：为向您提供一致化服务以及便于您进行统一管理，我们可能会将
您的个人信息与我们的关联方共享。但我们只会共享必要的个人信息，如果我们共享您的个
人敏感信息或者关联方改变个人信息的使用目的，将再次征求您的授权同意。
（4）与合作伙伴分享：我们可能会向业务合作伙伴共享为您提供服务所必要的订单信息、账户信息、支付信息等。我们的业务合作伙伴包括以下类型：供应商\服务提供商。仅为实现本政策中声明的目的，我们的某些服务将由业务合作伙伴提供。以保障为您提供的服务顺利完成，我们可能会将您的个人信息共享给上述合伙伴，包括技术服务、支付服务等。其中可能包括您的联络信息、订单信息、支付信息、地址信息等，以保障为您提供的服务顺利完成。其他业务合作伙伴。我们还可能与委托我们进行推广和广告投放的合作伙伴共享信息，但我们仅会向这些合作伙伴提供推广的覆盖面、有效性以及统计类等信息，而不会提供可以识别您身份的个人信息。
（5）基于协议约定：依据您与我们签署的相关协议(包括在线签署的电子协议及平台规则)或法律文件，有必要向第三方共享时；
（6）基于合理商业习惯：例如与第三方共享联合营销活动中的中奖信息，以便第三方能及时向您发放奖品；或者在我们计划与其他公司进行资本市场活动(包括但不限于 IPO，债券发行)接受尽职调查时等；
（7）基于学术研究；例如为科研机构开展统计或学术研究之必要；
（8）基于符合法律法规的社会公共利益等。请您知悉，即使已经取得您的授权同意，我们也仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并尽量对共享内容中的个人信息进行去标识化处理。其中您的联络信息和地址信息属于个人敏感信息，我们已经采取了“默认号码保护”、“地址隐藏”等举措尽全力保护您的个人信息。对我们仅为实现本政策中声明的目的与之共享个人信息的公司、组织和个人，我们会与其签署严格的信息保护和保密协定，要求他们遵守协议并采取相关的安全措施来保护您的个人信息。
（二）转让
随着我们业务的发展，我们及我们的关联方有可能进行合并、收购、资产转让或类似的交易，如涉及个人信息的转让，我们会要求受让您个人信息的公司、组织继续接受本隐私政策的约束，否则,我们将要求该公司、组织重新征求您的授权同意。

（三）公开披露
我们仅会在以下情况下，且采取符合业界标准的安全防护措施的前提下，才可能公开披露您的个人信息：
1、根据您的需求，在您明确同意的披露方式下披露您所指定的个人信息；
2、根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。
（四）共享、转让、公开披露个人信息时事先征得授权同意的例外以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：
1、与国家安全、国防安全有关的；
2、与公共安全、公共卫生、重大公共利益有关的；
3、与犯罪侦查、起诉、审判和判决执行等有关的；
4、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
5、其他维护公共利益的情形，例如您的信用评价信息需要被公开\共享；
6、您自行向社会公众公开的个人信息；
7、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。根据法律规定，共享、转让、公开披露经去标识化处理的个人信息，且确保数据接收方
无法复原并重新识别个人信息主体的，我们对此类数据的处理将无需另行向您通知并征得您
的同意。请注意，您在使用我们服务时自愿发布甚至公开分享的信息，可能会涉及您或他人的个人信息甚至个人敏感信息，如您的交易信息，以及您在评价时选择上传包含个人信息的文字、图片或视频等各种形式的信息。请您在使用我们的服务时更加谨慎地考虑，是否要发布甚至公开分享相关信息。
四、我们如何保存和保护您的个人信息
（一）个人信息的保存
1、保存期限：除非依据法律法规或双方约定，我们仅会在实现目的所必需的最短时间内留存您的相关个人信息。在您主动注销账号时，我们将根据法律法规的要求尽快删除您的个人信息或匿名化处理，有关注销账号的相关规则和流程，请参见本政策附件中的《用户注销协议》。

2、保存地域：原则上，我们在中华人民共和国境内收集和产生的个人信息，将存储在中国境内，但以下情形除外：
(1)法律法规有明确规定的；
(2)单独征得您的授权同意；
(3)您主动发起的跨境预定、下单、交易等个人行为（如购买国际机票、预订国际酒店等）。
(4)在上述情形中，我们会并要求数据接收方按照本隐私政策以及其他相关的安全保密措施来处理个人信息。
3、终止运营：如果发生终止运营等情形，我们将会至少提前 30天通知您，并在终止运营后对您的个人信息进行删除或匿名化处理。

（二）个人信息的保护措施
1、数据安全措施为保障您的信息安全，我们努力采取各种符合业界标准的物理、电子和管理方面的安措施来保护您的个人信息，建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用。车主点评通过信息接触者保密协议、监控和审计机制来对数据进行全面安全控制。防止您的个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。例如在您的浏览器与“服务”之间交换数据(如信用卡信息)时采用 SSL加密保护技术;同时对网站本身提供 https安全浏览方式;使用加密技术确保数据的保密性;使用受信赖的保护机制防止数据遭到恶意攻击;部署访问控制机制，确保只有授权人员才可访问个人信息;以及举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。

2、安全认证
我们已先后通过了公安部信息安全等级保护三级认证、第三方支付行业（支付卡行业PCI DSS)数据安全标准国际认证、ISO27001信息安全管理体系国际认证等认证资质，并与监管机构、第三方测评机构建立了良好的协调沟通机制，及时抵御并处置各类信息安全威胁，为您的信息安全提供全方位保障。

3、请您知悉并理解，互联网并非绝对安全的环境，我们强烈建议您通过安全方式、使用复杂密码，协助我们保证您的账号安全。如您发现自己的个人信息泄密，尤其是您的账户或密码发生泄露，请您立即根据本隐私政策中提供的联系方式联络我们，以便我们采取相应措施。

4、安全事件
在不幸发生个人信息安全事件后，我们会立即成立专项应急小组，启动应急预案，防止安全事件扩大，并按照法律法规的要求及时向您告知:安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。

五、您如何管理您的个人信息

您对您的个人信息享有以下权利:

（一）您有权访问、更正、删除您的个人信息，法律法规规定的例外情况除外。
您可以通过以下方式管理您的信息:
账户信息——您可以访问、更正您账户中的个人资料及账号信息（身份认证信息除外）、支付信息、账号绑定信息等，也可以更改您的密码、添加安全信息或关闭您的账户等，您可以通过访问网页及 App在设置中执行此类操作。
地址信息——您可以通过访问车主点评网页\App页面上的“设置”—“收货地址”或“我的地址”中随时添加、更改、删除您的收货地址信息（包括收货人姓名、性别、收货地址、电话号码等）。
搜索浏览信息——您可以在车主点评网页\App中访问或清除您的搜索历史记录、查看和修改兴趣以及管理其他数据。订单信息——您可以通过访问“我的订单”页面查看您的所有已经完成、待付款、待售后、待评价的订单。您可以选择删除已完成的订单信息，但这样可能导致我们无法根据您的购买信息而准确提供相应的售后服务。
评论信息——您可以通过访问车主点评网页\App页面上的“评价”、“评价中心”访问、更正、清除您的评论内容。如果您无法通过上述链接管理这些个人信息，您可以随时联系我们的客服。我们将在30天内回复您的访问请求。
（二）改变您授权同意的范围或撤回授权

您可以通过在车主点评网站\App中删除信息、更改隐私设置以及在浏览器或操作系统中关闭设备功能等方式改变同意范围或撤回您的授权。请您理解，当您执行上述操作后，我们将无法继续为您提供撤回同意或授权所对应的服务，但不会影响此前基于您的授权而开展的个人信息处理。
（三）注销账户

您有权注销您的车主点评账户，您可以通过访问车主 App页面上的“设置”—“安全中心”——“注销账号”中进行在线操作；或者拨打我们的客服电话进行协助注销。有关注销账户的相关规则和流程，请参见附件中的《用户注销协议》。您注销成功后，我们将根据法律法规的要求尽快删除您的个人信息或作匿名化处理。如果您无法通过上述方式访问、更正或删除您的个人信息以及注销账号，或者如果您认为车主点评存在违反法律的规定收集、使用您个人信息的情形，您可以通过我们的客服或通过本隐私政策提供的其他方式与我们取得联系。为了保障安全，我们可能需要您提供相应方式证明您的身份和请求的正当性，我们将在收到您反馈并验证您的身份后的 30天内答复您的请求。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。

（四）拒绝接受定向推送及营销信息
拒绝营销——您可以通过回复“TD”退订我们发送给您的营销短信。拒绝定向推送——您可以在搜索相关服务时拒绝选择“智能排序”的算法推荐模式，而选择“距离优先”、“低价优先”等非定向的推荐模式使用我们的产品\服务。

六、未成年人的个人信息保护
车主点评非常重视对未成年人个人信息的保护。我们的网站和服务主要面向成人。如您为未成年人的，建议您请您的父母或监护人仔细阅读本隐私权政策，并在征得您的父母或监护人同意的前提下使用我们的服务或向我们提供信息。对于经父母或监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。如果我们发现自己在未事先获得可证实的父母或法定监护人同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。

七、通知和修订
为给您提供更好的服务，我们的业务将不时变化，本隐私政策也将随之调整。未经您明确同意，我们不会削减您依据本隐私政策所应享有的权利。我们会通过在我们网站、移动端上发出更新版本或以其他方式提醒您相关内容的更新，也请您访问我们以便及时了解最新的隐私政策。在前述情况下，若您继续使用我们的服务，即表示同意接受修订后的本政策并受之约束。

八、如何联系我们
如果您对于我们的个人信息处理行为存在任何投诉举报需求，您可以通过车主点评网站（如https:// http://www.chezhudianping.com等）\App上提供的联系方式\客服系统与我们联系并作充分描述，我们将在验证您身份的30天内答复您的请求并尽力解决。如果您对我们的回复不满意，特别是认为我们的个人信息处理行为损害了您的合法权益，您还可以通过向被告住所地有管辖权的法院提起诉讼。

附录
1、个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。本隐私政策中可能涉及到的个人信息包括但不限于：个人基本信息（包括姓名、电话号码、性别、住址、生日等）；个人身份信息（包括身份证、军官证、护照、驾驶证等）；网络身份标识信息（包括系统账号、IP地址、邮箱地址及与前述有关的密码、口令、口令保护答案）；个人财产信息（包括银行账号、交易和消费记录、信贷记录以及虚拟财产信息等）；个人健康生理信息（包括病症、病历、病史等）；联系人信息（包括通讯录、好友列表等）；个人上网记录（包括网站浏览记录、点击记录等）；个人设备信息（包括硬件型号、操作系统类型、唯一设备识别码等描述个人常用设备基本情况的信息）；个人位置信息（包括行踪轨迹、精准定位信息、住宿信息、经纬度等）。

2、个人敏感信息：是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。本隐私政策中可能涉及到的个人敏感信息包括：个人身份信息（包括身份证、军官证、护照、驾驶证等）；个人财产信息（银行账号、交易和消费记录、信贷记录以及虚拟财产信息等）；网络身份识别信息（包括账户名、账户昵称、邮箱地址及与前述有关的密码与密码保护问题和答案）；其他信息（个人电话号码、婚史、宗教信仰、行踪轨迹等）。

3、车主点评：本政策所称的车主点评是指车主点评及其旗下包括但不限于上海鹰东科技发展有限公司及现有和\或未来设立的相关关联公司的单称或合称。

4、关联账号：您可以使用相同的手机号码登录车主点评所提供的产品\服务，以便于我们基于关联账号向您提供一致的服务以及您进行统一管理。
附件一：
《用户注销协议》

在您注销您的账户之前，请充分阅读、理解并同意下列事项：
在此善意地提醒您，您注销车主点评账户的行为，将导致我们终止对您提供本服务，也会给您的售后维权带来诸多不便。注销成功后，我们将删除您的个人信息，使其保持不可被检索、访问的状态，或对其进行匿名化处理。您知晓并理解，根据相关法律规定相关交易记录须在车主点评保存 1年甚至更长的时间。

1.如果您仍执意注销账户，您的账户需同时满足以下条件：
（1）账户在车主点评系统中无资产、无欠款；
（2）账户内无未完成的订单、已提供服务但未支付的订单/服务；
（3）账户无任何纠纷，包括投诉举报或被投诉举报；
（4）账户为正常使用中的账户且无任何账户被限制的记录；
（5）账户对应的车主支付账户已注销，且已妥善处理了车主支付账户下的所有问题；
2.在车主点评账户注销期间，如果您的车主点评账户涉及争议纠纷，包括但不限于投诉、举报、诉讼、仲裁、国家有权机关调查等，车主点评有权自行终止本车主点评账户的注销而无需另行得到您的同意。
3.请您在提交注销申请前，务必解绑其他相关账户，具体可与我们的客服联系。
4.车主点评账户一旦被注销将不可恢复，请您在操作之前自行备份账户相关的所有信息和数据。注销车主点评账户，您将无法再使用本车主点评账户，也将无法找回您车主点评账户中及与账户相关的任何内容或信息（即使您使用相同的手机号码再次注册并使用车主点评），包括但不限于：
（1）您将无法登录、使用车主点评账户；
（2）车主点评账户的个人资料和历史信息（包括但不限于用户名、昵称、头像、预定/团购记录等）都将无法找回；
（3）您通过车主点评账号进行登录的车主点评旗下各网站\APP所有记录将无法找回。您将无法再登录、使用前述服务，您曾获得的优惠券、积分、及其他卡券等视为您自行放弃，将无法继续使用。您理解并同意，车主点评无法协助您重新恢复前述服务。
5.注销本车主点评账户并不代表本车主点评账户注销前的账户行为和相关责任得到豁免或减轻。`

export const termsOfService = `车主点评用户服务条款

发布/生效日期：2019 年3 月15日

您在使用车主点评服务前，应当仔细认真阅读本《车主点评用户服务条款》(下称“本条款”)中的全部规则、及发布的其他服务条款、专项产品或服务规则或规范的内容（特别是其中以加粗及/或加下划线标示出的关于车主点评服务及用户重大权益的规则，该等规则可能涉及相关方的责任免除或限制、法律适用与争议解决条款，请您重点阅读），确认对本条款、《车主点评平台用户服务协议》及各项服务规则均已知晓、理解并接受，并已同意将其作为确定双方权利义务的依据。所有服务规则视为本条款不可分割的一部分，与本条款具有同等法律效力。
本条款的签约双方为车主点评服务的实际运营商上海鹰东科技发展有限公司（下称“车主点评”）与使用车主点评相关服务的使用人（下称“用户”或“您”），本条款是您与车主点评之间关于您使用车主点评提供的各项服务所订立的服务条款，具有正式书面合同的效力。
本条款为《车主点评平台用户服务协议》（包括但不限于所附的《车主点评平台隐私政策》）的必要组成部分。《车主点评平台用户服务协议》将同时适用于车主点评的各项服务。
1、车哪修车主点评：指是上海鹰东科技发展有限公司运营的平台，包括但不限于车主点评网、车主点评客户端、车主点评小程序等形式的互联网平台。车主点评运用自己的平台系统，通过互联网络等方式为用户提供商户信息、点评信息、消费信息、优惠信息、电子刊物、团购等网络服务。
2、商户：是指根据本条款及其他适用的服务规则，在车主点评平台上发布信
息。
4、团购：团购是指通过车主点评平台，一定数量的用户组团或者参团，以较低折扣价格购买同一种服务或商品的行为，包括消费买单、预约及预订服务项目等。
5、团购信息：是指商户通过车主点评发布的团购商品或服务的信息，此类信息包括但不限于团购商品或服务的名称、种类、数量、质量、价格、配送方式、支付形式、退换货方式、退款条件、售后服务等内容。
6、团购券：是指用户通过车主点评购买商户的服务或商品并成功支付团购价款后，相关商户通过车主点评自动向用户出具的供用户向该商户要求提供商品或服务的交易凭证。
7、优惠券：是指用户通过车主点评购买商户的服务或商品时，购买、免费领取或使用积分兑换用于享受减免、折扣或其他优惠条件的电子交易凭证。
8、交互信息服务：交互信息服务是指用户在车主点评交互平台（下称“点评交互平台”）上发布文字、图片、视频及表演（直播）等信息。点评交互平台包括但不限于点评社区、点评头条、点评直播、笔记功能等。
一、	用户账号
您知悉并同意，您可通过注册新的车主点评账号可以使用车主点评的各项服务及功能，您使用该账号应同时遵守《车主点评平台用户服务协议》中的各项规定。

二、用户管理
1、您知悉、理解并同意，车主点评服务过程中，可能涉及收集、存储、使用、共享和保护用户个人信息。在您使用车主点评提供的服务时，您同意车主点评依据《车主点评平台隐私政策》的规定执行相关个人信息的收集、使用和共享。您进一步同意，就车主点评平台所产生的交易或其他与个人信息使用紧密相关的交易，您授权车主点评使用或允许车主点评许可的第三方在必要、合理的限度内使用您的个人信息，包括但不限于身份信息、账号信息、交易信息等。
2、您知悉并同意，车主点评将按照有关网络信息主管部门的相关规定对您的账号信息及所发布的各项信息进行必要的安全审查及评估，保留并向有关部门定期报送您的账号信息及您所发布的各项信息。
3、用户有权在车主点评平台上发布客观、真实、亲身体验的文字点评、图片点评、视频点评或者自行添加商户、完善车主点评平台中商户的商户名称、营业时间、位置等信息。用户同意并理解，为了遵守法律法规和政策，维护良好的平台秩序，车主点评有权对特定用户、特定行业、特定商品或者服务的点评信息或者商户信息发布流程作出特别设定或者限制。用户有权参加车主点评社区，并发表符合国家法律规定，并符合车主点评社区规则的文章及观点。
4、您可以通过正式的页面公告或站内信或电子邮件或客服电话或手机短信、常规的信件接收和查看中奖、优惠等活动或信息，并在车主点评上自行浏览、下载和使用优惠券和/或团购券。
5、用户知晓并同意，他人可能通过“认领”等操作获得用户在车主点评平台中添加的商户条目之管理权限，并可能对用户添加、完善之信息进行修改或者使用。
6、用户有权根据车主点评相关规定，在发布点评信息等贡献后，取得车主点评给予的奖励（如贡献值、积分、徽章等）。
7、用户确认已经仔细阅读并充分理解和自愿同意车主点评《平台点评规则》的全部规定。在发布信息时，您应确保该等信息的真实性、客观性、合法性，车主点评提倡用户贡献高质量体验点评。用户应确保在车主点评上发表的各类点评信息、攻略或文章、图片及视频均不涉及侵犯第三方隐私、著作权或其他合法权益。用户需维护点评的客观性，不得利用车主点评用户身份进行违反诚信的任何行为，包括但不限于：
（1）炒作并向商户收取费用或获取利益；
（2）为获得利益或好处，参与或组织撰写及发布虚假点评；
（3）以差评威胁、要求商户提供额外的利益或好处；
（4）不得以虚构事实、侮辱、诽谤等方式恶意诋毁车主点评网或商家的商誉；
（5）进行其他其它影响点评客观、干扰扰乱车主点评正常秩序的违规行为等。如您存在以上行为的，车主点评有权采取如下行动：
①违规信息将作屏蔽，视情节轻重发出警告；
②清除其所有点评、图片，取消点评星级、社区等级，屏蔽其发布的涉及商业性炒作的部落帖或部落；
③暂时限制/永久限制您使用账号在车主点评平台上发布信息；
④法律、行政法规、本条款及《车主点评平台用户服务协议》规定的其他方式。
8、禁止用户将车主点评以任何形式作为从事各种非法活动的场所、平台或媒介。未经车主点评的授权或许可，用户不得借用车主点评的名义从事任何商业活动，也不得以任何形式将车主点评作为从事商业活动的场所、平台或媒介。
9、车主点评要求各搜索引擎遵循行业规范， 即“ 拒绝Robots 访问标准”(Robots Exclusion Standard) ，否则将视你的抓取行为是对我车主点评财产权利和知识产权的侵犯，有权通过法律诉讼维护车主点评利益。车主点评制定了详细的Robots 规则，点击查阅。
10、您违反本条款、《车主点评平台用户服务协议》或车主点评不时发布的任何服务规则，则车主点评有权在法律允许的范围内采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在车主点评获得的星级、荣誉以及虚拟财富暂停或终止您通过车主点评账号使用，给车主点评、造成损失的，您应负全部赔偿责任，包括且不限于财产损害赔偿、名誉损害赔偿、诉讼费、律师费、公证费、交通费等因维权而产生的合理费用。车主点评有权按照本条款及《车主点评平台用户服务协议》的相关规定对您的行为进行处理。


三、团购服务特别约定
1、您有权通过车主点评平台浏览各项团购信息，购买团购券、优惠券并使用其参与相关商户提供的商品或服务。
2、您知悉并同意，您在车主点评平台上所浏览及购买的团购券、优惠券或其他消费产品均系商户所提供的商品或服务，如您因购买或使用该等商品或服务产生任何问题或争议，您应自行与相应商户协商解决。
3、有关您使用车主点评平台参与团购活动的其他权利义务，除本条款及相关服务规则另有说明外，应参照《车主团购用户服务条款》的相关规定执行。
四、交互信息服务特别约定
1、您应确保具有相应的资格并符合在车主点评开展交互信息服务的相应条件。如果因为您不具备相应资格或者条件的情形下通过车主点评交互平台发布信息而引发任何法律责任，您应自行承担。因此给车主点评交互平台造成损失的，您应予以全额赔偿。
2、点评交互平台有可能在相关法律法规和政策的指引下，对直播等交互信息服务实施分级分类管理，建立发布者信用等级管理体系，建立黑名单管理制度等。
3、用户在点评交互平台发布的文字、图片、视频、表演（直播）等信息均应遵守相关法律法规、规章、本条款及《车主点评平台用户服务协议》的相关规定。
4、您同意：如出现以下任一情形的，车主点评将视情节轻重采取删除信息、限制交互平台使用功能、停止您的账号使用车主点评及点评头条等处理措施：
（1）发布违反相关法律法规、规章、政策之规定或者违反本条款及相关服务规则的信息；
（2）发布与主题无关的信息或评论，包含文字、图片、视频等；
（3）发布可能存在交易风险的外部网站和APP 信息，如发布社交、团购等外部网站或APP 的名称、超链接、二维码等信息；
（4）发布的视频违反国家法律法规的相关要求，包括但不限于《广播电视管理条例》、《电影管理条例》、《互联网视听节目服务管理规定》、《广电总局关于加强互联网视听节目内容管理的通知》等的相关要求；
（5）用户进行表演（直播）时违反国家法律法规的相关要求，包括但不限于《互联网文化管理暂行规定》、《互联网直播服务管理规定》等的相关要求；
（6）其他违反《车主点评商户直播行为规范》及《车主点评平台用户服务协议》相关规定的情形。
六、服务终止
1、您同意车主点评有权随时修改或中断其向您提供的任何免费服务而无需事先通知您。您与车主点评进行的有偿交易，您同意车主点评有权在事先通知的情况下予以修改、中断，并按照公平、诚实信用、等价有偿的原则处理后续事宜。
2、如您的账号同时符合以下条件，则车主点评有权利终止您通过车主点评账号使用车主点评。这将导致您的账号不能再登录车主点评，相应服务亦同时终止：
（一）连续六个月未登录；
（二）不存在未到期的有效业务；
（三）终止您的账号和服务的行为不违反相关法律法规的强制性规定。
3、如您对本条款及其不时修订有任何异议的，您有权停止使用车主点评的各项服务，或通过客服等渠道告知车主点评停止对您提供服务。停止服务后，除法律法规另有明确规定外，车主点评有权（但无义务）保留您的账号访问车主点评的相关信息和数据，或留存、转发任何账号内的任何站内信或短消息。在此情况下，车主点评没有义务（但有权利）向您或代为向商家或其他第三方传送任何未处理的信息或未完成的服务或交易信息。您同意车主点评不就终止车主点评服务而对您或任何第三方承担任何责任。
4、您同意，您与车主点评的合同关系终止后，车主点评就您在使用车主点评服务期间存在违法行为或违反本条款和／或其他服务规则的行为的，仍可依据本条款向您主张权利。

七、知识产权及其它权利
1、用户确认其已经仔细阅读并同意车主点评的《知识产权声明》。该声明为本条款之重要组成部分。
2、车主点评平台及相关服务的运营系统由车主点评自主开发、运营并提供技术支持，车主点评对车主点评服务的开发和运营等过程中产生的所有数据和信息等享有全部权利。车主点评提供各项服务时所依托软件的著作权、专利权，所使用的各项商标、商业形象、商业标识、技术诀窍，其著作权、商标权及其他各项相关权利均归车主点评所有。
3、您理解并同意，您在车主点评发表的各项点评信息、文章、视频、反馈意见等所有信息及其衍生品的知识产权及所有权，适用《车主点评平台用户服务协议》中的相关约定。

八、免责事由
1、除非车主点评以书面形式明确约定，车主点评对于用户以任何方式（包括但不限于包含、经由、连接或下载）从车主点评所获得的任何由商户发布的内容信息，包括但不限于商户信息、点评内容等，不保证其准确性、完整性、可靠性。用户应当自行审核判断相关信息，并对于用户因车主点评上的内容信息而购买、获取的任何产品、服务、信息或资料自行承担责任和风险。用户因此受损的，车主点评在法律允许的最大范围内予以免责。车主点评内所有用户所发表的用户点评、商户或者产品信息等，仅代表用户个人观点，并不表示车主点评赞同其观点或证实其描述，车主点评在法律允许的最大范围内予以免责。
2、您同意并理解，针对商户向您销售/提供的商品/服务，车主点评并非您所购买的具体商品或者服务的生产者和销售者。您同意，针对该等商品或者服务以及相关售后服务中所产生的任何矛盾和纠纷均不应针对车主点评提出。在法律允许的范围内，车主点评不对上述商品/服务承担包括解释说明、赔偿在内的任何责任。对于车主点评平台中明确标注为自营的商品/服务，适用车主点评自营商品/服务的相应服务规则。
3、您在车主点评平台上传、发布任何信息或者内容的，应当自行保留备份。车主点评不对用户所发布信息的保存、修改、删除或储存失败负责，对车主点评上的非因车主点评故意所导致的排字错误、疏忽等不承担责任。车主点评有权但无义务，改善或更正车主点评任何部分之疏漏、错误。
4、您知悉车主点评在其平台上所公布的各项排行榜单系根据用户真实评价、访问次数、浏览时长等数据自行生成，并无人工干预。该等榜单仅为您选择商品或服务提供参考，不涉及任何商户付费宣传，您应自行判断榜单中所列商品及服务的属性，车主点评将不对此榜单中所列商品和服务做出任何形式的担保或保证。
5、任何非经车主点评正规渠道获得的中奖、优惠等活动或信息，车主点评不承担法律责任
6、车主点评因发现车主点评上显现的团购、预订、消费买单等交易产品信息明显错误或缺货时，有权单方面作出修改，但该修改不应视为车主点评对您作出的任何承诺。
7、车主点评有权在法律允许范围内，在不通知您的情况下删除任何用户发布的不符合本条款及各项服务规则、《车主点评平台用户服务协议》以及法律规定的信息。车主点评将不对删除该等信息给您造成的不便或损失承担任何责任。
8、您同意，在法律许可范围内，车主点评在任何情况下都不对任何个人或实体的直接、间接、偶然、特殊、惩罚性的损害或其他损害或损失承担责任，这些损害或损失包括但不限于：
（1）您理解并同意，由于互联网的特殊性造成的车主点评显示的信息所存在的滞后性或差错，车主点评对此不承担任何责任；
（2）您在使用车主点评服务中，因第三方原因使您遭受侮辱、诽谤、不作为、淫秽、色情或亵渎事件，车主点评在法律允许的范围内不承担法律责任；
（3）《车主点评平台用户服务协议》中规定其他不可抗力及免责事由。

九、争议解决
1、《车主点评争议调解处理规范》是本条款的重要组成部分，您确认已经仔细阅读并同意遵守该规范全部内容。如本条款对同一问题有不同规定，您同意这些专门规范之容将优先适用。
2、您同意并理解，如您因通过车主点评平台购买的任何商品或者服务产生任何纠纷的，车主点评可在法律法规要求的范围内协助您与争议对方进行协商调解。您同意，大点评有权向争议双方了解情况，并将所了解的情况通过必要方式通知对方。但您理解并同意，车主点评无任何义务对您与商家之间的任何争议承担任何责任。
3、若您与车主点评因本条款内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向本条款签订地（上海市松江区）有管辖权的人民法院提诉讼。
4、因您使用车主点评服务而引起或与之相关的一切争议、权利主张或其它事项，均适用中华人民共和国大陆地区法律，并且排除一切冲突法规定的适用。

十、意见及反馈
用户如有任何需要说明条款的要求， 请造访【联系我们】致电说明。`

export const platformUserServiceAgreement = `车主点评平台用户服务协议

协议版本：【1.0】；发布/生效日期：【2019 年3 月15 日】
欢迎您注册车主点评账号并使用车主点评的服务！本《车主点评平台用户服务协议》（以下简称“本服务协议”）是您与车主点评之间就注册车主点评用户账号及使用车主点评的各项服务等相关事宜所订立的协议。为使用车主点评的服务，您应当仔细阅读并遵守本服务协议下的全部内容，特别是涉及免除或者责任限制的条款，该类条款可能以黑体加粗或加下划线的形式提示您重点注意。除非您已阅读并接受本服务协议所有条款，否则您将不能注册车主点评账号或使用车主点评的服务，如您不同意本服务条款的任意内容，请勿注册或使用车主点评的服务，并应立即停止注册程序。如您对本服务协议的内容（特别是涉及免除或者责任限制的条款）有任何疑义，可随时按照本服务协议中列明的联系方式与我们联系，我们将根据您的要求为您进一步解释和说明相关内容。如您勾选“我同意《车主点评平台用户服务协议》”并通过注册程序或其他任何方式使用或接受车主点评的任何服务，即视为您已阅读并同意本服务协议，自愿接受本服务协议的所有内容的约束。请您在决定注册或使用服务前再次确认您已知悉并完全理解本服务协议的所有内容。如果您未满18 周岁，请务必在家长和其他法定监护人的陪同下阅读本服务协议，并在进行注册、下单、支付等任何行为或使用车主点评的其他任何服务前，应事先征得您的家长和其他法定监护人的同意。本服务协议所述“服务”既包括您使用车主点评用户账号接受车主点评平台相关商家、个人所提供的服务，亦包括在某些特定的业务类别下您使用车主点评用户账号向其他商家、个人或其他主体提供服务的情形。无论“服务”属于上述何种情形，本《车主点评平台用户服务协议》都将予以适用。
一、协议的主体与范围
【签约主体】视您所使用的具体服务而定，“车主点评”是指车主点评旗下运营或提供您所使用的相关具体服务的相关主体的统称，您可在相关服务的具体服务条款或说明文件中查看上述主体的名称和信息。“用户”是指使用车主点评相关服务的使用人，在本服务协议中更多称呼为“您”。
【协议内容】本服务协议内容同时包括：
（1） 本《车主点评平台用户服务协议》文本
（2） 《车主点评平台隐私政策》车主点评非常重视您的个人信息和隐私的保护，将按照《车主点评平台隐私政策》中所公布的政策在具体服务中进行隐私及个人信息的收集、存储、使用、披露等活动。您在注册车主点评账号前，应仔细阅读《车主点评平台隐私政策》；
（3） 具体服务的服务条款：您的车主点评平台账号一经注册，即可凭该账号按规定享受车主点评平台上的各项丰富的服务。为更好地向您提供各项服务，车主点评平台针对具体的服务制定了专门的服务条款，供服务各方遵守。您可在【相关具体服务的网站、页面或应用程序】中查阅并下载此类专门服务条款。您在使用具体服务前，应仔细阅读该服务所适用的服务条款，您注册车主点评账号并利用车主点评账号使用具体服务即表示您已同时接受该等服务条款，并将受该等服务条款的约束；
（4） 专项商品或服务规则。为更好地提升用户体验，车主点评在若干具体专项商品或服务中特别制定了详细的规则，供各方遵守。
（5） 第三方服务相关的用户授权协议。为方便您在使用车主点评平台服务的同时，根据您自身需要，通过车主点评平台进行跳转等方式，自愿选择接受独立第三方服务商及部分关联第三方服务商所提供的服务，您将在使用该等第三方服务前对相应的用户授权协议予以同意确认，以作为您和车主点评平台之间就该等第三方服务的使用所涉及的相关事项的权利义务依据。上述各项内容之间如存在不一致之处，以时间上最新发布的内容为准，发布时间相同的，以本款【协议内容】中所包含的组成部分的序号倒序排列为准。
【协议遵守】您理解并同意：
（1） 上述【协议内容】中所述的协议、政策、条款与规则构成本服务协议不可分割的组成部分，共同适用于您所使用的车主点评平台服务。
（2） 根据国家法律法规变化、运营需要或为提升服务质量的目的，车主点评将在必要的时候对上述各项协议、条款与规则不时地进行修改更新，并通过在网页或移动客户端上发出公告、站内信等合理、醒目的方式向您进行提前通知，上述修改更新内容将在相关更新说明中指定的日期开始实施，通常情况下不短于发布之日后八个自然日。
（3） 您应当及时查阅并了解相关更新修改内容，如您不同意相关更新修改内容，可停止使用相关更新修改内容所涉及的服务，此情形下，变更事项对您不产生效力；如您在上述更新修改内容实施后继续使用所涉及的服务，将视为您已同意各项更新修改内容。
【适用平台】本服务协议适用于网页端、移动客户端（包括IOS、安卓及已有或未来将新增的任何其他移动客户端）等各类平台或媒介中车主点评所提供的各项服务。您知悉并理解，为享受上述相关服务，您必须自行提供相关上网设备（如：个人电脑、手机、平板电脑或其他设备）并自行负担相关网络使用和商品服务支付所产生的有关费用。
二、账号的注册
【注册资料】您应遵循诚实信用、合法善意的原则，向车主点评提交相关注册资料，相关注册资料应当遵守法律法规、社会主义制度、国家利益、公民合法权益、公序良俗、信息真实等原则，不应提交任何违法或不良信息，相关资料如有变动，您应及时更新。如果因您所提供的注册资料不合法、不真实、不准确或未及时更新，从而导致相关法律责任或不利后果的，您将承担相应的法律责任及不利后果。您已知悉，在车主点评账号注册过程中，因安全性、内部管理等原因，部分初始注册资料可能将无法再次更改。因此，您应谨慎核查此部分注册资料，确保正确填写。
【民事行为能力】您知悉并承诺，您具有完全民事权利能力和行为能力或虽不具有完全民事权利能力和行为能力但已经过您的家长和其他法定监护人同意并由您的家长和其他法定监护人代理注册及使用车主点评的各项服务。若您不具备前述相适应的民事行为能力即进行账号注册的，则您及您的家长和其他法定监护人应依照法律规定承担因此而导致的一切后果。
【真实身份】因国家法律法规、监管要求及特定门类的服务（如金融服务等）需要，您有可能需要在注册或使用该等服务的特定环节中填写真实的身份信息，并需通过相关验证流程后方可使用服务，如您填写的身份信息不完整、不真实或未通过验证，将导致您无法使用该服务、损害自身、他人利益或造成其他不利后果，该等后果将由您予以承担。
【注册信息保护】车主点评将对您所提交的注册信息予以保护，不会将其披露给任何非关联的第三方，除非：
（1） 相关法律法规或国家机关要求；
（2） 车主点评发生相关合并、分立、收购或资产转移；或
（3） 为提供相关服务所必须的。
对于您所提交的注册信息中涉及个人信息的内容，车主点评将严格按照《车主点评平台隐私政策》的规定进行收集、处理和使用。
【账号数量】除因历史原因、业务整合等车主点评所认可的特殊情况外，车主点评原则上只允许您使用一个车主点评用户账号。如有证据证明或车主点评有理由相信您存在不当注册或不当使用多个车主点评账号的情形，车主点评可将相关账号信息进行合并或采取其他合理措施，如因您不当注册或不当使用给车主点评及相关方造成损失的，您还应承担相应的赔偿责任。此外，出于相关业务需要，车主点评也可对同一用户的多个账号或相关信息进行合并，如该等合并将对您的权益产生实质影响，车主点评将在进行上述合并前事先征得您的同意。
三、账号的使用
【账号登录】您可以使用注册账号时填写登记的并获得系统审核通过的账号密码登录车主点评平台。为了您的使用便利，车主点评将适时提供指纹识别、人脸识别等更为安全便捷的登录方式，车主点评可根据相关法律法规、监管要求、用户体验、风险控制等因素对登录方式予以适时调整或增减，或在具体业务门类的用户服务条款等规定中予以进一步细化或调整。
【账号使用】您应对您账号项下的所有行为（包括但不限于在线签署任何协议，浏览、购买、支付、点评、上传、发布、输入任何内容）所产生的一切后果负责，通过您的账号所发生的上述各项行为将视为您本人的真实意思表示。车主点评提示您，您通过自身账号在接受车主点评的各项服务中所上传、发送的任何内容都应具有合法来源，如相关内容涉及任何第三方的合法权益，应事先获得相应的许可。如车主点评收到涉及您的相关举报或投诉，车主点评可采取相关法律法规所要求或允许的方式，向相关争议方、相关部门提供包括账号在内的必要的信息，以便解决纠纷争议，保护正当权利人的合法权益。
【账号借用】为保证相关账号安全，未经车主点评的书面同意，您不应将车主点评平台上所注册的账号借给他人使用，否则您应当承担由此产生的全部责任，车主点评平台保留拒绝提供相应服务、冻结或收回注册账号或终止本服务协议的权利，并可要求您对车主点评所承受的损失予以赔偿。
【安全义务】如您发现账号存在安全问题，请您立即联系车主点评予以调查处理，否则车主点评对潜在损失的产生或扩大不承担任何责任。车主点评特别提示您，您应该妥善保管您的账号和密码，当您使用完毕车主点评的服务后，您应安全退出。此外，您不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，请一定先核实对方身份，并请经常留意车主点评有关防范诈骗犯罪的提示。您知悉并同意，如您在账号信息的保管上、相关上网设备的网络安全维护上存在任何过失导致账号丢失、泄露，您应对此所产生的任何后果负责，车主点评对此不负任何责任，如车主点评因此产生相关支出，车主点评将有权向您予以追偿。
【限制冻结】您知悉并同意，在符合法律法规的规定，或经国家机关要求的前提下，车主点评有权对您的注册账号进行限制或冻结，在该等情况下，您可能无法继续登陆或使用您的注册账号。
四、用户行为规范与责任承担
【用户义务】您知悉并承诺，在使用车主点评所提供的服务的过程中，您应遵守相关法律法规，不应从事如下违反法律法规的规定，影响正常服务提供或损害他人合法利益的行为：
（1） 不应利用车主点评平台或相关服务危害国家安全、破坏政治稳定、泄露国家秘密，不侵犯国家、社会、集体利益和第三方的合法权益，不从事违法犯罪活动，不设立用于实施诈骗，传授犯罪方法，制作或者销售违禁物品、管制物品等违法犯罪活动的网站、通讯群组，不利用网络发布涉及实施诈骗，制作或者销售违禁物品、管制物品以及其他违法犯罪活动的信息；
（2） 不应制作、发布、复制、查阅和传播、存储、链接下列信息：反对宪法所确定的基本原则的；危害国家安全，泄露国家秘密，颠覆国家政权，推翻社会主义制度，煽动分裂国家，破坏国家统一的；损害国家荣誉和利益的；煽动民族仇恨、民族歧视，破坏民族团结的；破坏国家宗教政策，宣扬邪教和封建迷信的；煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；捏造、散布谣言，侵犯他人权利，扰乱经济、社会秩序，破坏社会稳定的；散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；侮辱或者诽谤他人，侵害他人合法权益的；宣扬恐怖主义、极端主义的；违背当地风俗习惯的；含有法律、行政法规禁止的其他内容的；
（3） 不应从事下列危害计算机信息网络安全的活动：对网络服务及相关软硬件设施进行破解、破坏、删除、修改或者增加的；对计算机信息网络中存储或者传输的数据和应用程序进行删除、修改或者增加的；使用软件或硬件等方式窃取他人口令、非法入侵他人计算机系统；故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全的活动；
（4） 不应擅自复制和使用网络上未公开和未授权的文件。除相关著作权人明示同意，不应在网络中擅自破解、传播、下载或复制第三人享有著作权的软件或进行其他任何侵害他人知识产权的活动；
（5） 不应私自传播广告信息或以“刷单”等不正当方式帮助他人提升评价或利用评价权利对其他用户、商户实施威胁、敲诈勒索；
（6） 不应因对车主点评相关服务的使用行为导致车主点评卷入政治和公共事件；
（7） 不应通过侵犯第三人合法权益、作弊、扰乱系统、实施网络攻击、恶意套现、刷信誉、批量注册、用机器注册车主平台账户、用机器模拟客户端等手段进行交易或参加车主点评或其所授权的第三方发布的任何活动；
（8） 未经车主点评事先书面许可，不应自行或授权、协助任何第三方非法抓取车主点评所展示的任何内容（“非法抓取”是指采用未经车主点评认可的程序或者非正常浏览等技术手段获取内容数据的行为）。
【责任承担】如您在使用车主点评服务过程中涉及上述行为中的一项或多项，则需要对自己的行为承担法律责任。承担法律责任的形式包括但不限于：对受到侵害者进行赔偿，以及在车主点评首先承担了因您的行为导致的行政处罚或侵权损害赔偿责任等损失（含诉讼费、律师费等相关法律程序费用）后，您应立即给予车主点评等额的赔偿。此外，根据具体违法违规情形，车主点评有权作出独立判断，立即暂停或终止对您提供部分或全部服务，包括锁定、注销、删除帐号等措施。同时，您同意，如因您的行为造成他人经济损失的，车主点评可出于公共利益保护、消费者保护、商业利益保护等原则，在合法合规的前提下，从您的财富通账户（如有）中划扣相应款项，您同意并授权、委托车主点评进行上述划扣操作。
您知悉并理解，如果车主点评发现您的上述违法违规行为，依据相关法律法规的规定，车主点评有权或有义务立即停止相关服务，删除或屏蔽相关违规信息、服务评价，并视情况进行调查取证，保存有关记录，或向国家有关机关举报。同时，车主点评有权自主删除、屏蔽含有该内容的任何数据信息。车主点评将根据国家相关法律法规要求，对依法删除、屏蔽的数据信息予以记录、保存。
【广告促销】您理解并同意：为向您提供更为细致、贴心的服务，在经过您的事先确认后，车主点评或车主点评授权、认可的第三方商家、广告商可能通过您注册时填写的手机号码或者电子邮箱向您发送您可能感兴趣的商品服务的广告宣传信息、促销优惠等商业性信息，其方式和范围可不经向您特别通知而变更；如果您不愿意接收此类信息，则您有权通过车主平台提供的相应的退订方式进行退订。
您理解并同意，对上述的相关广告信息，您应审慎判断其真实性和可靠性，除法律法规明确规定外，您应对依该广告信息进行的交易负责。
【使用目的】除非在特定服务条款或规则中您与车主点评另有约定或车主点评另行予以书面同意，您将确保本服务协议下的服务仅为您个人非商业性质的使用。未经车主点评书面同意，您不得使用未经车主点评授权的任何插件、外挂或第三方工具对本服务协议下的服务进行干扰、破坏、修改或施加其他影响。
五、知识产权
【知识产权】您理解并知悉，除另有书面声明以外，以下信息和内容的知识产权（包括但不限于专利权、著作权、商标权及商业秘密）归车主点评所有：
1. 在车主点评相关服务中所提供的内容和信息（包括但不限于软件、技术、程序、网页、文字、图片、图像、地图、图标、音频、视频、图表、版面设计、电子文档、数据资料等）；
2. 车主点评用于提供上述内容和信息的基础设施和平台（包括但不限于软件、网站、应用程序等）；
3. 在车主点评提供相关服务中所使用的各项商标、商业形象、商业标识、技术诀窍、标语、文案等；
4. 车主点评平台服务的开发、运营、维护等过程中产生的所有数据和信息。车主点评所拥有的上述权利及所提供服务中所包含的任何内容的知识产权均受到法律保护，未经车主点评事先书面许可，您承诺不应且不应允许或协助任何人以任何形式（包括但不限于通过任何机器人、蜘蛛、截屏等程序或设备）进行使用、出租、出借、分发、展示、复制、修改、链接、转载、汇编、发表、出版、抓取、监视、引用或创造相关衍生作品。
【用户生成内容】您理解并同意，您在使用车主点评提供的服务时上传、提交、存储或发布的内容（包括但不限于文字、图片、视频、音频、动画等）均由您原创或已获合法授权。您通过车主点评上传、提交、存储或发布的任何内容的知识产权归属您或原始著作权人所有，您的上传、提交、存储或发布行为不会侵犯他人的知识产权或其他合法权益。
您知悉、理解并同意，您一旦接受本服务协议，即表明您主动将上述内容的非专属、可转让的财产性权利，如著作权（包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），在全世界范围内永久、免费、独家且不可撤销地授权给车主点评及其关联公司，车主点评及其关联公司可基于该等授权使用上述内容（包括但不限于用于商业用途）或向第三方自主进行任何必要的转授权。该等授权、转授权的使用场景包括但不限于当前或其他任何网站、应用程序、产品或移动终端设备等，且车主点评及其关联公司或车主点评及其关联公司所授权许可的第三方可通过对上述授权内容进行修改、复制、改编、翻译、汇编或制作，形成衍生产品。在不违反相关法律法规的强制性规定、尊重相关原始授权内容的知识产权的基础上，该等衍生产品的相关知识产权归车主点评及其关联公司或车主点评所授权许可的第三方所有。
您确认并同意授权车主点评及其关联公司以自己的名义或委托专业第三方针对有关您上传、提交、存储或发布的内容（含衍生作品）的侵权行为进行独立自主的维权并获得全部赔偿。维权形式包括但不限于：监测侵权行为、发送维权函、提起诉讼或仲裁、调解、和解等。车主点评及其关联公司有权对维权事宜做出独立决策并予以实施。您同意，因您通过车主点评上传、发布的任何内容导致的知识产权侵权问题，您将承担全部责任；如车主点评及其关联公司，或车主点评授权的其他服务提供方因第三方知识产权维权而产生损失，您将等额赔偿。
本服务协议已经构成《著作权法》第二十五条所规定的书面协议，其效力及于用户在车主点评平台发布的任何受著作权法保护的作品内容，无论该内容形成于本服务协议签订前还是本服务协议签订后。车主点评及车主点评转授权、许可的相关方有权将您在车主点评平台发表的产品使用体验、产品讨论或图片进行使用或者与其他人合作使用，使用范围包括但不限于网站、电子杂志、杂志、刊物、海报、公众号文章、微信小程序等。
【软件使用】在使用车主点评相关客户端的过程中，您可能需要下载特定软件。为了改善用户体验、修复漏洞、保障安全性等考虑，车主点评有权对软件进行更新，您应该将相关软件更新至最新版本，否则车主点评将不保证您能正常使用相关软件。
如果您从未经车主点评授权的第三方获取软件或与该软件名称相同的安装程序，车主点评无法保证该软件能够正常使用，由此造成的相关损失，车主点评不予负责。
【软件使用禁止性规定】除非车主点评书面许可，您在使用车主点评的软件时不得从事下列任一行为：
（1） 删除、编辑或遮挡软件及其副本上关于著作权、商标或其他权利标识或标记的信息；
（2） 复制、发布、出售或出租软件或其任何部分；
（3） 对软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试挖掘、提取软件的源代码；
（4） 其他对软件、软件所产生的数据所进行的任何增加、删减、变动的任何行为，包含制作、利用、授权各种第三方外挂、插件、系统进行上述行为。
六、协议的终止
【协议终止情形】本服务协议于以下任一情形下终止：
（1） 车主点评有权依据本服务协议约定，收回、注销用户账号，此情形下，本服务协议于账号收回、注销之日终止；
（2） 在满足车主点评平台公示的账号注销条件时，您通过网站自助服务或车主点评的客服注销车主点评的用户账号，本服务协议于账号注销之日终止。您理解并同意，您已认真阅读、认可《车主点评隐私政策》及其附件一《用户注销协议》，并已了解、同意相关用户注销流程及注销后的权利义务安排；
（3） 车主点评有权根据自身商业安排经过合理的提前通知终止全部车主点评平台服务，本服务协议于车主点评平台全部服务依法定程序及方式终止之日终止。
本服务协议终止后，车主点评将无法继续向您提供任何服务或履行任何其他义务，包括但不限于为您保留或向您披露其原车主点评账号中的任何信息，向您或第三方转发任何未曾阅读或发送过的信息等。本服务协议的终止不影响第五条知识产权条款以及其他根据其内容应继续有效的条款的有效性，也不影响本服务协议终止前各方的相关权利和义务，包括但不限于守约方依据本服务协议向违约方追究相应的违约责任。
七、通知与送达您知悉并认可，车主点评可视情况通过下列任意一种或几种方式向您通知重要信息：
（1） 向您注册时所提交的电子邮箱地址发送电子信息；
（2） 向您注册时所提交的手机号码发送电子信息；
（3） 向您提供的实际地址进行寄送纸质载体信息；
（4） 在网站或客户端显著位置刊登电子信息；
（5） 向车主点评网站或相应客户端的账户的站内信或其他即时通信客户端发送电子信息。
上述电子信息在发送成功或刊登完成后即视为送达。相关纸质载体的发送以相关邮寄凭证上的邮寄日期后的第五个自然日视为送达。上述送达方式同样可适用于相关仲裁或司法程序（含起诉、审理、执行等各阶段）。您应当保证所提供的联系方式是准确、有效的，并进行适时更新，如因提供的联系方式不准确或怠于更新等不可归责于车主点评的原因，导致相关通知、文件、文书无法送达或及时送达，您将自行承担由此可能产生的法律后果。
八、不可抗力或其他免责事由【不可抗力】您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务协议下的服务发生中断或终止。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于信息网络设备维护、信息网络连接故障、电脑、通讯或其他系统的故障、电力故障、罢工、劳动争议、暴乱、起义、骚乱、生产力或生产资料不足、火灾、洪水、风暴、爆炸、战争、政府行为、法律法规变动、司法行政机关的命令、其他不可抗力或第三方的不作为而造成的不能服务或延迟服务等行为。出现上述情况时，车主点评将努力在第一时间与相关部门配合，及时进行修复，但是由此给您造成的损失，车主点评在法律允许的范围内免责。
【其他免责事由】您理解并同意，在法律允许的范围内，车主点评对以下事由所导致的服务中断或终止不承担责任：
（1） 受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；
（2） 用户或车主点评的电脑软件、系统、硬件和通信线路出现故障；
（3） 用户操作不当；
（4） 用户通过非车主点评授权的方式使用本服务；
（5） 其他车主点评无法控制或合理预见的情形。
【信息真实性】车主点评提示您，在使用本服务的过程中，您可能会遇到网络信息或其他用户行为带来的风险，该等风险包含他人匿名或冒名的含有威胁、诽谤、令人反感、非法、误导、欺骗等任何信息或行为所造成任何心理、生理上的伤害或经济损失。请您仔细甄别，并在遇到上述相关不法行为时及时向车主点评或有关机关举报或投诉。车主点评将对相关内容开展日常检查并在收到举报或投诉时进行相应处理，但请您注意，车主点评不对非车主点评所发出或刊登的任何信息的真实性、适用性、合法性承担责任，也不对因第三方侵权行为给您造成的损害负责。
【责任限制】除非另有明确书面说明，在符合法律法规规定的情况下，车主点评不对其网站和客户端上的信息、内容、材料、产品或服务做任何形式的明示或默示的声明或担保
九、管辖、法律适用与争议解决
本服务协议的成立、生效、履行、解释与纠纷解决，适用中华人民共和国大陆地区法律法规，并且排除一切冲突法规定的适用。如因某项具体服务中的产品或服务问题导致您与车主点评间出现纠纷，您同意，该等纠纷将由适用于该项具体服务的服务条款或规则中所规定的争议解决地的有管辖权人民法院受理。就本服务协议而言，如您因本服务协议文本与车主点评产生争议纠纷，您同意交由本服务协议签订地有管辖权人民法院受理。本服务协议签订地为北京市朝阳区。

十、其他【关键词】本服务协议各条款前所列关键词仅供帮助理解条款主旨及快速定位查询条款所用，不能代替条款的任何内容，亦不作为解释条款的依据，车主点评建议您仔细阅读各条款的具体表述，以维护您的合法权益。【可分性】如果本服务协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。如您对本服务协议有任何问题或建议，请在工作时间联系车主点评客服部门，再次感谢您的耐心阅读！`

export const intellectualPropertyStatement = `知识产权声明

车主点评网（www.chezhudianping.com）所提供的各项服务的所有权和运作权归上海鹰东科技发展有限公司（以下简称“本公司”）。除特别说明或者法律另有特别规定外，本公司是车主点评网及其中所刊登全部资料、信息的知识产权的唯一所有人。除法律法规或者本平台另有规定/约定外，用户通过点评平台发布的消息一经发布即向公众传播和共享。本网站所刊登的全部资料包括但不限于网站架构、程序设计、程序代码、页面图文、音频、视频等信息（包括并不限于商户描述、用户点评、照片图片、社区帖、用户简评、回应、榜单等），本站首页、直播及各频道的专题内容，以及依据本网站独有的分析计算的商户星级、品质、环境、服务分数等数据信息。除法律特别规定或者政府明确要求外，在未取得本站书面明确许可前，任何单位或者个人不得将本网站的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式以任何文字对本站资料作全部和局部复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求本网站注册用户或者第三方复制转载本网站内容或者同意该单位或者个人复制转载本网站内容，亦不得通过技术手段抓取本网站内容。任何注册用户将在本网站注册用户名和密码提供给任何第三方用于许可其复制本站内容的，将构成对注册协议的违反，并可能导致其账户被关闭或者处罚。会员保证不会将已发表于本站的信息资料，以任何形式发布或授权其它网站（及媒体）使用。同时，在法律允许的范围内，车主点评网保留删除站内各类不符合规定的点评信息或者其他任何信息而不通知会员的权利。任何违反本站知识产权声明的行为，本站保留追究其行为人法律责任的权利。`

export const networkDisputeMediationProcessingSpecification = `车主点评网争议调解处理规范

总则

一、概述
车主点评网争议调解处理规范是为明确存在争议的交易款项归属或赔偿，保障点评用户和商家在交易中的合法权益，依据相关法律、法规、规章、政策和《车主点评用户服务条款》、《车主点评网商户服务协议》等规则或协议而进行制定。
1.车主点评网争议调解处理规范，是用户和商户授权车主点评网作为独立第三方，对双方存在争议的交易款项归属或赔偿做出处理的基本程序与标准。
2.车主点评网作为独立第三方，依据本规范的具体规定对双方之间出现的争议做出处理。车主点评网并非司法机关，对凭证/证据的鉴别能力及对争议的处理能力有限，车主点评网不保证争议处理结果符合用户或商户的期望，也不对依据本规范做出的争议处理结果承担任何责任，除非法律法规另有规定。用户、商户均声明放弃因车主点评网的争议调解处理行为而向车主点评网提起诉讼、索赔、投诉的权利（如有）。
3.纠纷争议处理期间，车主点评网通过车主点评网站、商家系统、在线客服、电子邮件、短信或电话等方式向双方发送的与争议处理相关的提示或通知，构成本规范的有效组成部分。
4.车主点评网有权随时变更本规范并在网站上予以公告。用户和商户不同意相关变更的，可自行协商或通过其他途径解决争议。

二、交易
1.商户交付给用户的商品/服务应当符合法律法规的相关规定，且所售商品/服务不得违反《车主点评用户服务条款》、《商户服务协议》、《商户信息发布管理规范》等全部规则、协议中关于发布违禁信息、出售假冒商品、滥发信息、假冒材质成分、出售未经报关进口商品、发布非约定商品等条款的相关规定。
2.商户应当对其所售商品/服务进行如实描述，即应当在商品/服务描述页面、店铺页面等宣传页面中对商品的基本属性、成色、瑕疵等以及服务的时间、内容必须说明的信息进行真实、完整的描述。
3.商户应当对其所售商品/服务质量承担保证责任，即保证其交付给买家的商品在质保期内可以正常使用，包括商品/服务不存在危及人身财产安全的不合理危险、具备商品应当具备的使用性能、符合商品/服务或其包装上注明采用的标准和适用于该商品/服务的国家强制性标准（如有）等。

三、举证责任
1.买卖双方申请车主点评网介入纠纷处理后的，在纠纷处理过程中，车主点评网有权要求用户或商户提供证明依据，且有权以普通非专业人士的知识水平和能力对用户和商户提交的相关证据材料进行鉴别和认定。
2.针对申请车主点评网介入、车主点评网受理的各类型争议所需提供的证明文件，以车主点评网要求及各类纠纷处理规则的内容为准。
3.车主点评网作为独立第三方，仅对买卖双方提交的证据进行形式审查，并作出独立判断，双方应自行对证据的真实性、完整性、准确性和及时性负责，并承担相关后果。

四、交易纠纷处理程序
1.申请和受理
（1）双方就订单产生交易纠纷的，买卖双方可以选择自行协商，如自买家提起交易纠纷申请后1 个工作日内，买卖双方协商未果的，则可以申请车主点评网客服介入处理。由车主点评网客服介入的，车主点评网客服即有权根据本规则对纠纷进行处理。
（2）买卖双方向车主点评网申请争议处理，必须符合以下条件：买家购买的商品/服务须为在车主点评网平台上通过第三方支付机构、货到付款方式（该货到付款方式须符合车主点评网平台相应规则及流程要求）或车主点评网平台认可的其他支付方式购买的第三方商户商品/服务。
2.纠纷的处理
（1）车主点评网处理争议期间，买卖双方应当按照车主点评网系统的提示和(或)车主点评网发送的短信、电话或邮件通知及时提供凭证和/或其他证据材料。
（2）车主点评网收集到双方提供的凭证和/或其他证据材料后，将按照本规则对相应纠纷做出处理；本规则没有明确规定的，由车主点评网依其独立判断做出处理。任何一方无正当理由，未按照前款规定提供凭证和/或其他证据材料的，车主点评网有权按照实际收集到的凭证和/或其他证据材料做出处理。交易纠纷处理细则

一、服务类商品争议处理规范
1. 本规范所称的服务类交易，系指由商户向用户提供服务或用户委托商户处理对应事务的交易。
2.服务订单交付时间届满前，商户已产生实质服务行为的，或商户依约已完成服务的，用户要求退款或拒绝接受服务的，需与商户协商一致。
3.商户未按约定履行服务订单的，依据订单履行的相关情形，分别作如下处置，双方另有约定的从其约定：
（1） 商户无正当理由拒绝履行服务订单，或部分履行服务订单，但已履行部分不可独立使用或虽可独立使用但和未履行部分分离后价值显受贬损的，交易做退款处理。
（2） 商户部分履行服务订单，已履行部分可独立使用且和未履部分分离后价值不受贬损的，交易按未履行部分比例做相应退款处理。
（3）商户存在延迟履行服务订单的：卖家在买家催告要求交付服务成果或申请退款之时起24 小时内，卖家仍无法交付服务成果的，交易支持退款买家。
（4） 商户的延迟履行行为致使买家合同目的无法实现的，交易将视服务内容进行退货退款或直接退款处理。合同目的实现与否，车主点评网将基于服务内容，并以普通车主的认知水准及日常经验进行判断。
（5）商户在提供服务过程中，非因用户原因而自行加价的，用户可以拒绝接受服务，交易支持退款用户。用户已接受服务的，可要求商户退还差价。
4.双方通过线下完成服务成果交付的，商户需对交付服务的凭证予以留存并妥善保管，否则由商户承担交易不利后果。
5.特别说明：因车主点评网系普通的第三方交易平台，并非专业的司法机构或鉴定机构：
（1）在车主点评网对服务成本、损失或价款等给付内容的进行酌定并实施款项分割前，买卖任一方均可向车主点评网提出中止争议处理服务，并通过司法途径向对方发起诉讼。
（2）若车主点评网已经作出服务成本、损失或价款等给付内容的酌定并已实施款项分割的，并不影响双方通过司法途径继续向对方提出主张。附则
一、车主点评网商户的行为，发生在本管理规则生效之日以前的，适用当时的规则。发生在本管理规则生效之日以后的，适用本规则。
二、本规则为通用规则，若本规则与商家与车主点评网签署的书面协议或车主点评网通过商家系统发布的具体商家规则不一致的，则以该协议及规则为准。
三、车主点评网可根据平台运营情况随时调整本管理规则并以公告的形式向商户公示。
四、商户应遵守国家法律、行政法规、部门规章等规范性文件。对任何涉嫌违反国家法律、行政法规、部门规章等规范性文件的行为，本规则已有规定的，适用于本规则。本规则尚无规定的，车主点评网有权酌情处理。但车主点评网对商户的处理不免除其应承担的法律责任。商户在车主点评网的任何行为，应同时遵守车主点评网《法律声明》提及和/或平台所有在线条款、协议之规定。
五、本规则于2019年3月15 日修订，于2019 年3月15日生效。`

export const groupPurchaseUserServiceTerm = `车主点评团购用户服务条款


发布/生效日期：自2019 年3 月15 日起生效


欢迎您使用车主点评的各项团购服务！您在使用车主点评的团购服务前，应当仔细认真阅读本《车主点评团购用户服务条款》( 下称“ 本条款” )，中的全部规则、《车主点评平台用户服务协议》及车主点评发布的其他服务条款、专项产品或服务规则或规范（以下合称“服务规则”）的内容（特别是其中以黑体字标示出的关于车主点评团购服务及用户重大权益的规则，该等规则可能涉及相关方的责任免除或限制、法律适用与争议解决条款，请您重点阅读），确认对本条款、《车主点评平台用户服务协议》及各项服务规则均已知晓、理解并接受，并已同意将其作为确定各方权利义务的依据。如您使用车主点评账号访问车主点评团购服务或以其他方式使用或接受车主点评团购服务的，即视为您已阅读并自愿接受本条款及服务规则所有内容的约束。所有服务规则视为本条款不可分割的一部分，与本条款具有同等法律效力。
本条款的签约各方为发布或展示商户团购信息的车主点评旗下相关平台的实际运营主体（以下统称“车主点评”）、通过车主点评平台发布或展示团购信息的商户以及使用车主点评团购相关服务的使用人（下称“用户”或“您”），本条款是您与实际提供团购信息平台服务的车主点评的相关主体及组织团购活动的商户之间关于您通过车主点评团购服务与商户达成团购交易所订立的服务条款，具有正式书面合同的效力。
本条款为《车主点评平台用户服务协议》（包括但不限于所附的《车主点评平台隐私政策》）的必要组成部分。《车主点评平台用户服务协议》将同时适用于各项车主点评团购服务。如本条款与《车主点评平台用户服务协议》文本内容存在冲突之处，则以时间上最新发布的内容为准，发布时间相同的，以本条款为准。本条款有待明确、存在歧义或未规定之处均以《车主点评平台用户服务协议》中的规定为准。您理解并同意，车主点评将根据《车主点评平台用户服务协议》的约定，对本条款或各项服务规则不时地进行修改更新。修改更新内容的发布和实施均适用《车主点评平台用户服务协议》的相关约定。
定义
1、车主点评团购服务：指车主点评作为第三方平台，为各类商户提供各类团购信息发布及展示平台，以供用户浏览相关团购信息并与商户达成交易的各项信息技术服务。车主点评团购服务仅包含车主点评所提供的信息技术服务，车主点评并不实际参与或提供任何团购商品/服务的交易。
2、商户：是指根据本条款及其他适用的服务规则，在车主点评上发布团购商品/服务信息、向用户提供团购商品/服务的自然人、法人和其他组织。
3、团购：团购是指用户基于商户发布的组团购买商品/服务的团购信息，通过车主点评组团或者参团，向相关商户以较低折扣价格购买同一种商品/服务的行为。
4、团购信息：是指商户通过车主点评发布的团购商品/服务的信息，此类信息包括但不限于团购商品/服务的名称、种类、数量、质量、价格、配送方式、支付形式、退换货方式、退款条件、售后服务等内容。
5、团购价款：用户为购买团购商品/服务而应向商户支付的团购商品/服务的对价，团购价款的数额以用户与商户达成的团购合同中约定的团购价格及团购数量为准。
6、团购券：是指用户通过车主点评购买商户的商品/服务并成功支付团购价款后，相关商户通过车主点评系统自动向用户出具的供用户向该商户要求提供商品/服务的凭证。

一、用户账号
您知悉并同意，您可通过注册新的车主点评账号或登录您现有的车主点评账号以使用车主点评团购服务的各项功能，您使用该账号应遵守《车主点评平台用户服务协议》中的各项规定。

二、用户管理
1、您知悉、理解并同意，车主点评服务过程中，可能涉及收集、存储、使用、共享和保护用户个人信息。在您使用车主点评提供的服务时，您同意车主点评依据《车主点评平台隐私政策》的规定执行相关个人信息的收集、使用和共享。您进一步同意，就车主点评所产生的团购交易，您授权车主点评使用或允许车主点评审核许可的第三方在必要、合理的限度内使用您的个人信息，包括但不限于身份信息、账号信息、交易信息等。
2、您有权选择是否订阅或退订车主点评发送的关于团购信息的电子邮件或短消息。
3、您应保证您在通过车主点评账号使用车主点评团购服务提交团购订单时所提供相关信息真实、完整、准确，如上述信息发生变更时您应及时进行更新并通知车主点评或相关商户。如车主点评通过技术检测、人工抽检等检测方式合理怀疑用户提供的信息错误、不实、失效或不完整时，有权通知您更正、更新信息或中止、终止为您提供服务。
4、如您要求获得团购商品/服务的发票、购货凭证或服务单据，您应在对团购商品/服务进行消费时向商户提出，发票金额应以实际支付的团购价款为准。
5、您同意，在您成功支付团购价款后应在合理范围内配合接收团购券等电子消费凭证。
6、您不得在车主点评以外的任何平台，以盈利、损害车主点评利益或转售等目的进行团购交易；否则车主点评有权代商户取消相关团购交易，并有权终止您通过车主点评账号使用车主点评团购服务，如因此导致车主点评产生损失的，还应由您负责赔偿。
7、如您违反本条款、《车主点评平台用户服务协议》或车主点评发布的任何服务规则，车主点评有权采取一切必要的措施，包括但不限于暂停或终止您通过车主点评账号使用车主点评团购服务，给车主点评造成损失的，您应负全部赔偿责任，包括且不限于财产损害赔偿、名誉损害赔偿及诉讼费、律师费、公证费、交通费等因维权而产生的合理费用。车主点评有权按照本条款及《车主点评平台用户服务协议》的相关规定对您的行为进行处理。

三、团购服务规则
1、车主点评将根据《中华人民共和国电子商务法》等法律法规要求，对商户予以审慎审核（包括但不限于证照审核等），记录、保存平台上发布的商品和服务信息、交易信息，并在发现显示信息有误时进行更正，以积极保障您的人身、财产安全，但鉴于平台存在海量信息及信息与实物相分离的特点，车主点评客观上无法逐一实质审查每一商品/服务的信息，除法律法规强制性规定外，车主点评不对商户所销售的商品/服务的真实性、适用性、合法性、安全性提供任何形式的明示或默示的担保、声明或承诺，亦不对因此所导致的您的任何损失（含第三方侵权行为给您造成的损害）承担任何责任，但车主点评在其中存在故意或重大过失的除外。如您在使用车主点评团购服务的过程中发现平台中的相关商品/服务信息违反法律规定，您可及时向车主点评或有关机关举报或投诉，车主点评将在收到您的举报或投诉后采取相应的核实与处理措施。
2、您知悉并同意，车主点评仅为信息服务平台，并非用户购买的具体商品/服务的生产者、销售者或提供者。您通过车主点评购买各项商品/服务时应仔细阅读商户的商品/服务介绍、预订及取消政策以及其他适用的服务协议等内容，并根据您的独立判断选择购买商品/服务。
3、您同意车主点评有权采取必要的技术手段和管理措施保障车主点评团购服务的正常运行，提供必要、可靠的交易环境和交易服务，维护团购交易秩序。您在通过车主点评购买团购商品/服务时应遵守本条款及相关服务规则的规定，不得干扰车主点评的正常运营、破坏团购秩序，亦不得以任何手段干扰车主点评团购服务正常运营或干扰其他用户使用车主点评团购服务。
4、您同意，您通过车主点评所进行的团购交易应出于真实消费目的，不得以转售等商业目的进行团购交易。
5、您同意并承诺，在使用车主点评团购服务过程中应本着诚信原则进行各项交易，不得对团购商品/服务进行虚假评价，或虚假投诉或以虚构事实等方式恶意诋毁车主点评或商户的商誉。您对商户、团购商品/服务进行评价时应遵守《车主点评平台点评规则》】（以下统称“《点评规则》”）中的相关规定，如您违反《点评规则》进行评价的，车主点评有权按照《点评规则》、本条款及《车主点评平台用户服务协议》的相关规定进行处理。
6、团购订单提交及确认
6.1 您在浏览团购商品/服务的团购信息时，应当仔细阅读团购信息中包含的全部内容，包括但不限于团购商品/服务的名称、种类、数量、质量、价格、有效期、预约时间、商户地址、营业时间、配送方式、退换货方式、退款条件、售后服务、安全注意事项等内容，其中用户应特别注意团购。
商品/服务的有效期、预约时间及退款条件等内容，您完全接受团购信息中包含的全部内容后方可点击购买。
6.2 点击购买后，您应选择及确认购买数量、价格、应付总额、接收团购券联系方式等内容。一旦您点击提交订单，并经系统确认成功后，您与商户之间的团购合同即成立。商户发布的团购信息与用户确认的订单信息将构成团购合同的内容。您提交订单即视为用户已知晓并同意接受团购合同中的全部内容，您与商户均应当按照团购合同的约定履行各自的权利义务。
6.3 在团购合同成立之后您应根据车主点评付款页面的提示通过网上支付平台向商户支付团购价款。您在支付成功后，团购合同方才生效。您知悉并同意，您在成功支付团购价款之前无权要求商户向您提供团购商品/服务。
6.4 用户付款成功前，商户可对订单内容进行修改，如您同意该等修改的，您可确认订单后进行支付；如您不同意该等修改的，您可以取消订单。用户付款成功后，如确因情况变化导致商户需对订单内容作出变更的，您有权选择拒绝接受该等变更并要求商户全额退还您已支付的款项；如您接受该等变更的，您应按照变更内容进行消费。
7、团购券
7.1 团购合同生效后，相关商户通过车主点评向您发放团购券，您可持团购券从该商户获得相应的商品/服务。您应当按照团购合同的约定使用团购券，任何不按照团购合同及商品/服务说明使用团购券的行为，均可能导致团购券不能正常使用或无效。
7.2 团购券是您进行团购交易的重要凭证，您应当妥善保管团购券，团购券不记名、不挂失、不可兑换现金，如因您个人保管不善等原因导致的团购券信息泄露，从而造成您未实际消费但团购券已被验证等后果的，您应自行承担相关责任。
7.3 团购券应在约定的团购券有效期限内使用，超过有效期的团购券不可作为要求商户提供商品/服务的凭证。
7.4 您进行消费时，应向商户出示团购券，商户对团购券验证成功后按照团购合同内容的约定向您提供团购商品/服务。
7.5 团购券于发生以下情形之一时即失效：
（1）凭团购券已获得团购商品/服务；
（2）团购合同内容中约定的有效期届满。
7.6 您非经车主点评购买而从任何其它渠道获得的团购券，发生任何问题，包括但不限于不能获得商品/服务等，车主点评不承担任何责任。
7.7 商户有权对团购商品/服务的每人最高限购数及总数量进行限制与修改，但不影响已经生效的团购合同。
8、退款规则
8.1为了使您在使用车主点评团购服务中有更好的体验，车主点评特制定退款规则。您成功支付团购价款后，如需要进行退款的，将按照如下规则进行：
8.1.1 发生以下情形之一的，团购合同解除，您有权要求商户进行退款：
（1） 因未达到最低参团人数，造成当次参团活动被商户取消的；
（2） 因不可抗力或商户原因，导致商户无法向用户提供团购商品/服务，经车主点评核实后属实的；
（3） 确因客观情况变化、页面信息显示错误、系统故障、物料短缺等特殊原因导致商户需要变更团购合同内容，用户不接受变更后内容的；
（4） 团购券超过使用期限但用户未实际消费的；
（5） 其他团购信息中明确可以退款的情形。
8.1.2 您知悉、理解并同意，如您在实际使用/消费团购商品/服务后又要求商户退款的，商户原则上有权拒绝您的退款要求，但商户在向您提供商品/服务时存在违法情形或者严重质量问题的除外。此外，您在实际使用/消费团购商品/服务过程中遇到其他特殊情况，需要向商户申请退款的，您应首先自行联系商户，车主点评将视情况帮助您联系商户处理相关问题，但车主点评不负责代替商户向您承担任何责任。
8.1.3 用户未凭团购电子消费凭证进行实际消费且符合车主点评关于“未消费随时退款”（但已超过约定的退款期限的除外）或“过期自动退”约定的，车主点评将根据用户的退款申请将相关款项退回用户的支付账户。
8.1.4 用户退款要求符合退款条件的，车主点评将根据退款服务条款和操作规则把款项按照用户的支付路径原路退回至用户的支付账户。但如下商品/服务除外：
（1） 已消费且无充分证据证明商户提供的商品/服务存在对用户购买产生实质性影响的瑕疵或与团购信息不符的其他情形的；
（2） 实物类商品在用户按照车主点评相关服务规则提交退货申请，并退回商品前（需物流运送的商品）；
（3） 因非正常使用及保管而损坏的团购商品；
（4） 在团购信息中明确标明“不支持未消费随时退款”的商品/服务；
8.1.5 根据商品性质，部分团购商品/服务不接受退款，商户会在团购信息中予以声明。您点击购买的行为视为已确认该商品/服务不宜退款/退货。
8.1.6 在退款进行过程中，您应当遵守本条款及车主点评不时发布的退款服务规则和操作流程的规定。
8.1.7 商户应遵守《商户入驻服务协议》并根据实际情况及时发布并更新团购信息及相关规则，并在组织团购活动中严格遵守车主点评不时发布的相关服务协议、服务条款、服务规则，否则车主点评有权按照相关规定对商户进行处理。
8.1.8 抵用券/优惠券的退款说明
（1） 用户部分或全部使用抵用券/优惠券支付团购价款的，在发生退款时，抵用券/优惠券不予退回；
（2） 退款团购券的总金额将会先行扣除抵用券/优惠券的金额，余下的金额将按照退款流程予以退款；
（3） 团购订单中已使用的抵用券/优惠券，无论该单团购是否申请退款，已使用的抵用券/优惠券不可再次使用。

四、服务终止
1、您同意车主点评有权随时修改或中断其向您提供的任何免费服务而不需事先通知您。您与车主点评进行的有偿交易，您同意车主点评有权在事先通知的情况下予以修改、中断，并按照公平、诚实信用、等价有偿的原则处理后续事宜。
2、如您对本条款及其不时修订有任何异议的，您有权停止使用各项车主点评团购服务，或通过客服等渠道告知车主点评停止对您提供服务。停止服务后，除法律法规另有明确规定外，车主点评有权（但无义务）保留您的账号访问车主点评的相关信息和数据，或留存、转发任何账号内的任何站内信或短消息。在此情况下，车主点评没有义务（但有权利）向您或代为向商户或其他第三方传送任何未处理的信息或未完成的服务或交易信息。您同意车主点评不就终止车主点评团购服务而对您或任何第三方承担任何责任。
3、您同意，您与车主点评及商户的合同关系终止后，车主点评就您在使用车主点评团购服务期间存在的违法行为或违反本条款和／或其他服务规则的行为，仍可依据本条款向您主张权利。

五、知识产权及其它权利
1、车主点评所展示的各运营系统由车主点评自主开发、运营提供技术支持，并对车主点评团购服务的开发和运营等过程中产生的所有数据和信息等享有全部权利。车主点评提供各项服务时所依托软件的著作权、专利权，所使用的各项商标、商业形象、商业标识、技术诀窍，其著作权、商标权及其他各项相关权利均归车主点评所有。
2、您理解并同意，您在车主点评发表的各项信息、商品/服务使用体验、反馈意见、产品讨论或图片、视频等所有信息及其衍生品的知识产权及所有权，适用《车主点评平台用户服务协议》中的相关约定。


六、免责事由
1、您在车主点评上传、发布任何信息或者内容的，应当自行保留备份。车主点评不对用户所发布信息的保存、修改、删除或储存失败负责。对车主点评上的非因车主点评故意所导致的排字错误、疏忽等不承担责任。车主点评有权但无义务，改善或更正车主点评任何部分之疏漏、错误。
2、您同意并理解，如您因通过车主点评购买的任何团购商品/服务产生任何纠纷的，在法律允许的范围内，车主点评将不对此承担包括解释说明、赔偿在内的任何责任。
3、您同意，对因《车主点评平台用户服务协议》中规定的其他不可抗力和免责事由给您造成损失的，车主点评不承担责任。

七、争议解决
1、如您与商户因所购买的商品/服务或其他与您和商户的团购合同的相关事宜发生任何争议，您应与商户根据本条款及团购合同内容的约定确定各自的权利义务、承担各自责任，解决争议。车主点评可在法律法规要求的范围内协助您与商户之间争议的协商调解。您同意，车主点评有权通过电话或电子邮件等方式向争议双方了解情况，并将所了解的情况通过必要方式通知对方。此外，您有权通过司法或执法机关要求车主点评提供相关资料，但您理解并同意，车主点评无任何义务对您与商户之间的任何争议承担任何责任。
2、除前述第1 条约定外，若您因本条款内容或其执行发生任何其他争议，各方应尽力友好协商解决；协商不成时，任何一方均可向本条款签订地有管辖权的人民法院提起诉讼。
3、因您使用车主点评团购服务而引起或与之相关的一切争议、权利主张或其它事项，均适用中华人民共和国大陆地区法律，并且排除一切冲突法规定的适用。如您对本服务条款有任何问题或建议，请在工作时间联系车主点评客服部门。
再次感谢您的耐心阅读！`

export const reviewRules = `车主点评点评规则

生效时间：2019 年3月15 日生效欢迎您使用车主点评的点评功能！您在使用车主点评的点评功能前，应当仔细认真阅读本《车主点评点评规则》(下称“本规则”)中的全部内容、《车主点评平台用户服务协议》及车主点评发布的其他服务条款、专项产品或服务规则或规范（以下合称“服务规则”）的内容（特别是其中以黑体字标示出的关于车主点评、商户及用户重大权益的规则，该等规则可能涉及相关方的责任免除或限制、法律适用与争议解决条款，请您重点阅读），确认对本规则、《车主点评平台用户服务协议》及各项服务规则均已知晓、理解并接受，并已同意将其作为确定各方权利义务的依据。如您通过车主点评账号使用车主点评点评功能的，即视为您已阅读并自愿接受本规则及服务规则所有内容的约束。本规则的签约各方为提供点评技术服务的车主点评平台的实际运营主体（以下统称“车主点评”）、通过车主点评平台发布或展示产品/服务信息的商户以及使用车主点评点评功能的使用人（下称“用户”或“您”），本规则为《车主点评平台用户服务协议》（包括但不限于所附的《隐私政策》）的必要组成部分。您理解并同意，车主点评将根据《车主点评平台用户服务协议》的约定，对本规则不时地进行修改更新。修改更新内容的发布和实施均适用《车主点评平台用户服务协议》的相关约定。

第一章概述
第一条【宗旨原则】为促进用户作出公正、客观、真实的点评，进而为其他用户的消费决策和商户经营提供参考，根据相关法律、法规、规章、政策和《车主点评平台用户协议》、《隐私政策》等相关协议及车主点评《法律声明》、《知识产权声明》中述及或者链接的其他规则的规定，制定本规则。
第二条【适用范围】本规则适用于车主点评所有用户和商户。
第三条【效力级别】本规则与《车主点评平台用户服务协议》文本内容存在冲突之处，以时间上最新发布的内容为准，发布时间相同的，以本规则为准。本规则有待明确、存在歧义或未规定之处均以《车主点评平台用户服务协议》中的规定为准。

第二章点评基本信息
第四条【点评内容】按照评价场景，点评信息包括用户的商品/服务评价和用户（或商户）的回应内容；按照表现形式，点评信息包括但不限于“文字点评”、“图片点评”和“视频点评”等。
第五条【商户星级和评分】商户星级和评分由用户对商户作出，包括对商品/服务的整体满意度、以及根据品类不同下设的包括但不限于口味、效果、环境、服务等方面的评分指标构成。商户星级和评分均为动态指标，系根据点评用户专业度、点评质量、添加时间、诚信度、点评数量等多种要素加权由系统综合计算得出。

第三章点评管理及处理
第六条【点评处理原则】用户通过车主点评发布的点评内容系用户的消费体验，而此类体验存在较大的个体差异性。因此，车主点评原则上充分尊重用户发布的点评信息，除按照现有法律法规及平台规则对点评违规情形进行必要处理外，不会任意进行删除、屏蔽。但为了确保评价体系的公正性、客观性和真实性，将基于有限的技术手段，对违法违规侵权点评、恶意点评、不当点评、抄袭/雷同点评、炒作点评等破坏点评信用评价体系、侵犯消费者知情权的行为予以坚决打击。
第七条【点评逻辑调整】车主点评将根据用户消费体验、商户经营及平台运营需要，调整点评的开放或计算逻辑。
第八条【违法违规侵权点评】车主点评有权处理存在“违反相关法律法规内容”或者“侵犯他人合法权益”的点评，包括但不限于涉及政治敏感、色情、暴恐、反政府言论、破坏社会稳定以及侵犯他人知识产权、人格权等内容的点评。
第九条【恶意点评】点评人以谋取额外财物或其它不当利益为目的给予商户差评的或点评人与商户存在其他特殊利益关系而给予商户差评的，构成恶意点评。车主点评有权自主判别恶意点评，并对其予以处理。
第十条【不当点评】点评内容中包含污言秽语、涉及他人隐私信息、广告信息、灌水刷分、与商品或服务无关等无实际意义信息、低俗及其他有违公序良俗、有违社会道德规范的信息，构成不当点评。车主点评有权自主判别不当点评，并对其予以处理。
第十一条【抄袭/雷同点评】引用他人或他处图文（如抄袭网站简介、他人发表的图文信息等）的点评信息，超出合理限度，构成抄袭/雷同点评。车主点评有权自主判别抄袭/雷同点评并对其予以处理。
第十二条【炒作点评】车主点评有权处理涉嫌参与炒作点评行为而发布的点评信息。
第十三条【其他违反平台规则等的点评】车主点评有权处理以牟利、套现、获奖、攻击等目的发布的点评信息，处理违反《车主点评用户服务协议》、《隐私政策》、《车主点评网商户诚信公约及管理办法》等协议或者规则的其他点评信息。
第十四条【点评内容及点评人处理】针对前述违规行为，除对产生的评价内容做删除或者屏蔽等相应处理外，车主点评将视情形对点评人采取警告、要求进行身份验证、贡献值不累计、扣罚贡献值、限制或禁止点评、降低用户等级、取消VIP 等级等处理措施。如该点评人为车主点评商户或者与该商户具有关联关系，除对点评人按上述措施处罚外，车主点评有权按照《商户信息发布管理规范》、《车主点评网商户诚信公约及管理办法》等规则对商户进行处理。
第十五条【评价投诉】用户/商户可通过车主点评点评违规投诉/申诉渠道或拨打客服电话进行投诉。
第十六条【点评迁移】用户发布点评信息的点评对象与当前被点评商户明显不符，或者车主点评有理由认为该等点评内容系指向另外商户的，车主点评有权将该点评信息迁移至最相关的商户下予以展示。
第十七条【判定权】车主点评在法律允许的范围内，以中立的立场自行对相关评价之合法性、正当性恶意与否进行判定，用户认可车主点评有权行使该判定权，认可平台对点评信息采取的处理措施以及对点评人作出的处罚决定。

第四章附则
第十八条
【规则调整】车主点评可根据平台运营情况调整本点评规则并以公告的形式向用户及商户公示。
第十九条
【法律责任】用户及商户应遵守国家法律、行政法规、部门规章等相关规定。对任何涉嫌违反国家法律、行政法规、部门规章的行为，本规则已有规定的，适用本规则。本规则尚无规定的，车主点评有权酌情处理。但车主点评对用户及商户的处理并不免除其应承担的法律责任。用户及商户在车主点评的任何行为，应同时遵守与车主点评及其关联公司签订的各项协议。用户及商户违反本规则给车主点评造成损失的，应当承担全额赔偿责任。若违规商户有任何存储于车主点评的付款、预付款、应收款等款项，该商户同意并授权车主点评从该款项中优先扣除赔偿金。
第二十条
【规则适用】车主点评的点评人行为，发生在本管理规则生效之日以前的，适用当时的规则。发生在本管理规则生效之日以后的，适用本规则。如您对本规则有任何问题或建议，请在工作时间联系车主点评客服部门。再次感谢您的耐心阅读！`

export const priceDescription = `1、 团购价及其他未划线展示价：
团购价及其他未划线展示价为该商品/服务的实时销售价，是您最终决定是否购买商品/服务的依据。

2、 划线价/门店价/门市价：
商品/服务展示的划横线的价格/门店价/门市价为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品/服务在车主点评平台上曾经展示过的销售价或商品/服务的实体门店指导价、实体门店展示销售价等，但不特指门店的成交价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、实体门店指导价、实体门店展示销售价等可能会与您购物/消费时展示的不一致，该价格仅供您参考。

3、 折扣：
如无特殊说明，折扣指商户在原价、或划线价/门店价/门市价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价、实体门店指导价、实体门店展示销售价等）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系商户/车主点评客服进行咨询。`

