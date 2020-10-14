// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  f02405: 'retest, China, Shenzhen', // client node out of gas
  f02415: 'retest, China, Hong Kong', // client node out of gas
  f02619: 'retest, China, Beijing, Blockcasting', // client node out of gas
  f08025: 'retest, China, Hong Kong', // client node out of gas
  f010523: 'retest, China, Beijing', // client node out of gas
  f014409: 'retest, USA, Waxhaw', // client node out of gas
  f014569: 'retest, NR', // client node out of gas
  f018785: 'retest, Singapore + Germany, Frankfurt + USA', // client node out of gas
  f020385: 'retest, Korea, Incheon', // client node out of gas
  f020605: 'retest, China, Yibin', // client node out of gas
  f022566: 'retest, China, Nanchong', // client node out of gas
  f023678: 'retest, China, Jiaxing', // client node out of gas

  // Candidates

  f01277: 'candidate, Sweden, Stockholm, tvsthlm',
  f01280: 'candidate, China, Wuxi, 了凡超算',
  f01289: 'candidate, China, Hangzhou + USA',
  f01799: 'candidate, China, Jinan, TokenHome',
  f02399: 'candidate, China, Zhejiang',
  f02419: 'candidate, China, Shanghai, yuantai',
  f02423: 'candidate, Ukraine, Kyiv, igowreck',
  f02490: 'candidate, China, Fujian',
  f02576: 'candidate, Denmark, Gjerlev, BenjaminH',
  f02606: 'candidate, China, Shanghai',
  f02625: 'candidate, China, Shanghai, IPFS星际工厂',
  f02633: 'candidate, China, Hong Kong',
  f02645: 'candidate, China, Hong Kong',
  f02666: 'candidate, China, Chengdu',
  f02822: 'candidate, China, Chengdu',
  f03134: 'candidate, China, Cangzhou, 乔木信息',
  f03222: 'candidate, China, Yuncheong, 星云矿池',
  f03224: 'candidate, Ukraine, Irpin, oboltusov',
  f03264: 'candidate, Korea, Bucheon-si',
  f03339: 'candidate, China, Luzhou, benxun',
  f03345: 'candidate, China, Fuzhou, chh',
  f03347: 'candidate, undefined',
  f03491: 'candidate, China, Hong Kong',
  f03544: 'candidate, China, Guiyang',
  f03624: 'candidate, Germany, Chemnitz, ode',
  f05664: 'candidate, China, Shenzhen, 艾比特网络科技',
  f07806: 'candidate, China, Wuhan, HelloXP',
  f07824: 'candidate, China, Shanghai',
  f07982: 'candidate, China, Shenzhen',
  f07990: 'candidate, China, Hong Kong',
  f07998: 'candidate, China, Hangzhou',
  f08073: 'candidate, China, Qiqihar, QY7TT',
  f08091: 'candidate, USA',
  f08220: 'candidate, China, Shenzhen',
  f08257: 'candidate, China, Ningbo + USA, Boardman',
  f08371: 'candidate, China, Chengdu',
  f08474: 'candidate, China, Hong Kong',
  f08482: 'candidate, USA, Athol, @why',
  f09833: 'candidate, USA, San Jose',
  f09848: 'candidate, USA',
  f010035: 'candidate, Netherlands',
  f010048: 'candidate, China, Shanghai',
  f010399: 'candidate, China, Guangzhou',
  f010400: 'candidate, China, Shenyang',
  f010479: 'candidate, France, Fontenay-sous-Bois',
  f010493: 'candidate, China, Shanghai',
  f010501: 'candidate, China, Hangzhou',
  f010505: 'candidate, China, Wuhan',
  f010512: 'candidate, China, Zhengzhou',
  f010513: 'candidate, China, Chongqing',
  f010528: 'candidate, China, Chongqing',
  f010558: 'candidate, China, Shenzhen + Hong Kong',
  f014394: 'candidate, China, Suzhou',
  f015233: 'candidate, China, Nanjing',
  f015941: 'candidate, Ukraine, Kyiv',
  f017665: 'candidate, China, Shenyang',
  f018501: 'candidate, China, Beijing',
  f018780: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018781: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018782: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018783: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018784: 'candidate, Singapore + Germany, Frankfurt + USA',
  f019022: "candidate, China, Xi'an",
  f019029: 'candidate, Serbia, Boljevac',
  f019041: 'candidate, Singapore',
  f019074: 'candidate, China, Guangdong',
  f019240: 'candidate, China, Beijing',
  f019638: 'candidate, Germany, Frankfurt',
  f020489: 'candidate, China, Lioaning',
  f020747: 'candidate, China, Xiamen',
  f021262: 'candidate, China, Shanghai',
  f021265: 'candidate, China, Wuhan',
  f021444: 'candidate, China, Guangzhou',
  f021532: 'candidate, China, Shanghai',
  f022072: 'candidate, China, Jieyang',
  f022125: 'candidate, China, Shenzhen',
  f022163: 'candidate, NR',
  f022352: 'candidate, Norway, Borgen',
  f022395: 'candidate, USA, Los Angeles',
  f022522: 'candidate, China, Dongguan',
  f022820: 'candidate, China, Guangdong',
  f022853: 'candidate, China, Fuzhou',
  f023179: 'candidate, China, Fuzhou',
  f023490: 'candidate, Ukraine, Kyiv',
  f023492: 'candidate, China, Beijing',
  f023565: 'candidate, China, Fuzhou',
  f023647: 'candidate, Korea, Gangseo-gu',
  f023660: 'candidate, China, Fuzhou',
  f023662: 'candidate, China, Fuzhou',
  f023853: 'candidate, China, Fuzhou',
  f023854: 'candidate, undefined',
  f023855: 'candidate, China, Fuzhou',
  f023939: 'candidate, NR',
  f024101: 'candidate, China, Guiyang',
  f024146: 'candidate, China, Fuzhou',
  f024147: 'candidate, China, Fuzhou',
  f024148: 'candidate, China, Fuzhou',
  f024168: 'candidate, USA, Ashburn',
  f024468: 'candidate, China, Shenzhen',
  f025007: 'candidate, Korea, Gyeonggi-do',
  f025025: 'candidate, China, Qingdao',
  f029368: 'candidate, Korea, Gangseo-gu',
  f029377: 'candidate, China, Suzhou',
  f029490: 'candidate, NR',
  f029524: 'candidate, China, Hong Kong',
  f030125: 'candidate, China, Nantong',
  f030144: 'candidate, Korea, Gyeonggi-do',
  f030158: 'candidate, China, Hangzhou',
  f030226: 'candidate, China, Fuzhou',
  f030230: 'candidate, China, Sichuan',
  f030284: 'candidate, China, Shandong',
  f030391: 'candidate, China, Chengdu',
  f032835: 'candidate, Japan, Setagaya-ku',
  f032865: 'candidate, USA, Redmond',
  f032904: 'candidate, Korea',
  f032913: 'candidate, China, Shenzhen',
  f032934: 'candidate, Korea, Incheon',
  f032951: 'candidate, Korea, Gyeonggi-do',
  f032976: 'candidate, China, Taiwan, Taipei',
  f033028: 'candidate, China, Mianyang',
  f033048: 'candidate, USA, Ashburn',

  // Testing

  // Active

  f01247: 'active, Canada, Montreal, BigChungus™', // 638475
  f01272: 'active, Singapore', // 637896
  f01278: 'active, USA, Grand Rapids, MiMiner', // 637943
  f01782: 'active, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // 636646
  f02416: 'active, China, Guangdong, 星际无限', // 640153
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben', // 638488
  f03273: 'active, USA, Portland, 6block', // 638477
  f03274: 'active, USA, Portland, 6block', // 638468
  f03275: 'active, USA, Portland, 6block', // 639959
  f03302: 'active, China, Chengdu', // 639977
  f03363: 'active, Singapore', // 637963
  f03488: 'active, Korea, Geumcheon-gu', // 607595
  f05316: 'active, USA, Portland, 6block', // 637980
  f05317: 'active, USA, Portland', // 638481
  f07819: 'active, China, Wuxi, YC--wuxi', // 637947
  f08019: 'active, China, Yantai, 三合', // 636652
  f08094: 'active, China, Guangzhou, dongshao', // 639950
  f08157: 'active, China, Beijing + Germany, Frankfurt, 超星际', // 638483
  f08240: 'active, Russia, Novosibirsk, Rabinovitch', // 638494
  f08403: 'active, UK, Lower Slaughter', // 638003
  f09696: 'active, USA, Portland + Singapore', // 637892
  f010088: 'active, DNS:purumine.com', // 638482
  f010491: 'active, China, Shenzhen', // 640003
  f010498: 'active, China, Shenzhen', // 640173
  f010507: 'active, China, Hangzhou', // 638486
  f014768: 'active, Singapore', // 638484
  f015927: 'active, USA, East Islip', // 610534
  f019551: 'active, UK', // 636790
  f020541: 'active, China, Shanghai', // 640111
  f021255: 'active, China, Suzhou + Netherlands', // 638037
  f021540: 'active, Germany, Frankfurt, @hsanjuan', // 638555
  f021870: 'active, USA, Portland', // 638471
  f022227: 'active, China, Jiangsu', // 640662
  f023152: 'active, China, Quanzhou', // 636787
  f023495: 'active, China, Beijing + USA, Portland', // 638469
  f023971: 'active, USA, @Brian Y', // 637125
  f024012: 'active, China, Fuzhou', // 604376
  f024013: 'active, China, Fuzhou', // 604140
  f024030: 'active, Korea, Gwangju', // 637137
  f024066: 'active, NR', // 639846
  f024081: 'active, China, Fuzhou', // 604430
  f024084: 'active, China, Fuzhou', // 604369
  f024085: 'active, China, Fuzhou', // 604539
  f024800: 'active, China, Hong Kong', // 640042
  f024969: 'active, NR', // 640063
  f025017: 'active, China, Hefei', // 638552
  f025019: 'active, China, Taiwan, Hsinchu', // 637930
  f029556: 'active, China, Wuxi', // 636729
  f030296: 'active, USA, Cary', // 636964
  f030379: 'active, Korea, Uiwang', // 637023

  // Active/sealing

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM', // 638027
  f01800: 'sealing, China, Shenzhen + Chengdu', // 637852
  f02301: 'sealing, USA', // 637950
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje', // 637890
  f02401: 'sealing, Canada, Chambly, NBFS Canada', // 637974
  f02492: 'sealing, China, Shenzhen', // 640361
  f02501: 'sealing, USA, Portland, 6block', // 607279
  f02514: 'sealing, USA, Portland, 6block', // 607496
  f02620: 'sealing, Poland, Krakow, @magik6k', // 638472
  f02622: 'sealing, USA, Portland, 6block', // 610403
  f02623: 'sealing, USA, Portland, 6block', // 610920
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops', // 640077
  f03223: 'sealing, USA', // 637913
  f03340: "sealing, China, Xi'an", // 636711
  f05315: 'sealing, USA, Portland, 6block', // 607278
  f07850: 'sealing, USA, Portland, 6block', // 610523
  f08285: 'sealing, Latvia, Riga, stander', // 636429
  f08383: 'sealing, USA, Portland, 6block', // 607283
  f09693: 'sealing, USA, Portland + Singapore', // 607276
  f09731: 'sealing, China, Guiyang', // 637872
  f09770: "sealing, China, Xi'an", // 665564
  f010241: 'sealing, China, Beijing + USA, Portland', // 607275
  f010247: 'sealing, China, Yantai', // 636657
  f010253: 'sealing, China, Beijing + USA, Portland', // 607282
  f010446: 'sealing, Netherlands', // 638591
  f014324: 'sealing, Canada, Vancouver', // 636892
  f015734: 'sealing, China, Qingdao', // 636961
  f015877: 'sealing, China, Jiaxing + USA', // 610556
  f016594: 'sealing, Germany', // 637865
  f019100: 'sealing, Romania, Cluj-Napoca', // 638470
  f019104: 'sealing, Canada, Chambly', // 640046
  f019118: 'sealing, China, Jiaxing', // 641067
  f019243: 'sealing, USA, Jackson', // 640152
  f019354: 'sealing, Germany, Frankfurt', // 607296
  f019362: 'sealing, China, Hangzhou', // 636647
  f020436: 'sealing, China, Beijing', // 636724
  f021274: 'sealing, China, Shanghai', // 636678
  f021339: 'sealing, China, Jiaxing', // 636422
  f021346: 'sealing, China, Shanghai', // 636865
  f021357: 'sealing, China, Shanghai', // 636908
  f021583: 'sealing, China, Jiaxing', // 637878
  f021710: 'sealing, China, Shijiazhuang', // 637997
  f022142: 'sealing, USA, Queens', // 638480
  f022289: 'sealing, China, Mianyang', // 610397
  f022841: 'sealing, China, Zhongshan', // 640061
  f022922: 'sealing, China, Shenzhen', // 639958
  f023467: 'sealing, Norway, Oslo', // 637875
  f023573: 'sealing, Japan, Kumamoto', // 591570
  f023825: 'sealing, USA, Portland', // 607604
  f023858: 'sealing, China, Fuzhou', // 604593
  f023859: 'sealing, China, Fuzhou', // 604594
  f023861: 'sealing, China, Fuzhou', // 604253
  f023868: 'sealing, China, Fuzhou', // 604342
  f023869: 'sealing, China, Fuzhou', // 604316
  f023870: 'sealing, China, Fuzhou', // 604214
  f023871: 'sealing, China, Fuzhou', // 604455
  f023876: 'sealing, China, Fuzhou', // 604460
  f023928: 'sealing, China, Fuzhou', // 604344
  f023977: 'sealing, China, Fuzhou', // 604247
  f023978: 'sealing, China, Fuzhou', // 604531
  f023980: 'sealing, China, Fuzhou', // 604246
  f023981: 'sealing, China, Fuzhou', // 604268
  f024006: 'sealing, China, Fuzhou', // 604340
  f024007: 'sealing, China, Fuzhou', // 604296
  f024008: 'sealing, China, Fuzhou', // 604228
  f024014: 'sealing, China, Fuzhou', // 604289
  f024015: 'sealing, USA, Portland', // 607741
  f024016: 'sealing, USA, Portland', // 607599
  f024130: 'sealing, Korea', // 637065
  f024136: 'sealing, China, Fuzhou', // 604701
  f024156: 'sealing, USA', // 611099
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 636742
  f029566: 'sealing, NR', // 640058
  f029587: 'sealing, Hungary', // 636827
  f030335: 'sealing, China, Fujian', // 636939
  f030338: 'sealing, USA, Santa Fe Springs', // 637119
  f030518: 'sealing, China, Wuhan', // 637121
  f030641: 'sealing, China, Shaanxi', // 636870

  // Stuck

  // Min-size

  // Min-ask

  f01234: 'min-ask, Belgium, De Klinge, Eliovp',
  f01279: 'min-ask, China, Sichuan',
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔',
  f02654: 'min-ask, China, Shanghai',
  f07709: 'min-ask, Korea, Dongjak-gu',
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan',
  f09569: 'min-ask, China, Beijing',
  f019661: 'min-ask, Russia, Pyatigorsk',
  f020608: 'min-ask, Russia',
  f023581: 'min-ask, China, Hong Kong',
  f024127: 'min-ask, China, Fuzhou',
  f030184: 'min-ask, USA, Aliquippa'

  // Error

  // Rejected

  // Dial

  // XNR

  // Timeout during ask

  // Error during ask
}

export default annotations
