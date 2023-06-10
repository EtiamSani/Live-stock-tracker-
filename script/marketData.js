const marketData = [
  {
    name: "American Airlines Group Inc",
    symbol: "AAL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAL.svg",
  },
  {
    name: "Apple Inc",
    symbol: "AAPL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg",
  },
  {
    name: "Airbnb Inc",
    symbol: "ABNB",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/ABNB.svg",
  },
  {
    name: "Adobe Inc",
    symbol: "ADBE",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/ADBE.svg",
  },
  {
    name: "Affirm Holdings Inc",
    symbol: "AFRM",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AFRM.svg",
  },
  {
    name: "Agenus Inc",
    symbol: "AGEN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AGEN.svg",
  },
  {
    name: "AGNC Investment Corporation",
    symbol: "AGNC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AGNC.svg",
  },
  {
    name: "Advanced Health Intelligence Ltd",
    symbol: "AHI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AHI.svg",
  },
  {
    name: "Akili Inc",
    symbol: "AKLI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AKLI.svg",
  },
  {
    name: "Advanced Micro Devices Inc",
    symbol: "AMD",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AMD.svg",
  },
  {
    name: "Amazon.com Inc",
    symbol: "AMZN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AMZN.svg",
  },
  {
    name: "Vanguard Total Bond Market",
    symbol: "BND",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/BND.svg",
  },
  {
    name: "Bionano Genomics Inc",
    symbol: "BNGO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/BNGO.svg",
  },
  {
    name: "Chindata Group Holdings Ltd",
    symbol: "CD",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CD.svg",
  },
  {
    name: "ContraFect Corporation",
    symbol: "CFRX",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CFRX.svg",
  },
  {
    name: "Canopy Growth Corporation",
    symbol: "CGC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CGC.svg",
  },
  {
    name: "Comcast Corporation",
    symbol: "CMCSA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CMCSA.svg",
  },
  {
    name: "Coinbase Global Inc",
    symbol: "COIN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/COIN.svg",
  },
  {
    name: "Cisco Systems Inc",
    symbol: "CSCO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CSCO.svg",
  },
  {
    name: "CSX Corporation",
    symbol: "CSX",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CSX.svg",
  },
  {
    name: "Cyxtera Technologies Inc",
    symbol: "CYXT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/CYXT.svg",
  },
  {
    name: "Dada Nexus Ltd",
    symbol: "DADA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/DADA.svg",
  },
  {
    name: "Diversified Healthcare Trust",
    symbol: "DHC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/DHC.svg",
  },
  {
    name: "DISH Network Corporation",
    symbol: "DISH",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/DISH.svg",
  },
  {
    name: "DraftKings Inc",
    symbol: "DKNG",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/DKNG.svg",
  },
  {
    name: "DocuSign Inc",
    symbol: "DOCU",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/DOCU.svg",
  },
  {
    name: "Elevation Oncology Inc",
    symbol: "ELEV",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/ELEV.svg",
  },
  {
    name: "EVgo Inc",
    symbol: "EVGO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/EVGO.svg",
  },
  {
    name: "FuelCell Energy Inc",
    symbol: "FCEL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/FCEL.svg",
  },
  {
    name: "Faraday Future Intelligent Electric Inc",
    symbol: "FFIE",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/FFIE.svg",
  },
  {
    name: "Geron Corp",
    symbol: "GERN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GERN.svg",
  },
  {
    name: "Canoo Inc",
    symbol: "GOEV",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GOEV.svg",
  },
  {
    name: "Alphabet Inc",
    symbol: "GOOG",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GOOG.svg",
  },
  {
    name: "Alphabet Inc",
    symbol: "GOOGL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GOOGL.svg",
  },
  {
    name: "Grab Holdings Ltd",
    symbol: "GRAB",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GRAB.svg",
  },
  {
    name: "Grom Social Enterprises Inc",
    symbol: "GROM",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/GROM.svg",
  },
  {
    name: "Huntington Bancshares Inc",
    symbol: "HBAN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/HBAN.svg",
  },
  {
    name: "Ideanomics Inc",
    symbol: "IDEX",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/IDEX.svg",
  },
  {
    name: "ImmunoGen Inc",
    symbol: "IMGN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/IMGN.svg",
  },
  {
    name: "Inovio Pharmaceuticals Inc New",
    symbol: "INO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/INO.svg",
  },
  {
    name: "Intel Corporation",
    symbol: "INTC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/INTC.svg",
  },
  {
    name: "iQiyi Inc",
    symbol: "IQ",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/IQ.svg",
  },
  {
    name: "JetBlue Airways Corporation",
    symbol: "JBLU",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/JBLU.svg",
  },
  {
    name: "JD com Inc",
    symbol: "JD",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/JD.svg",
  },
  {
    name: "Kingsoft Cloud Holdings Ltd",
    symbol: "KC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/KC.svg",
  },
  {
    name: "Kraft Heinz Company",
    symbol: "KHC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/KHC.svg",
  },
  {
    name: "Lucid Group Inc",
    symbol: "LCID",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/LCID.svg",
  },
  {
    name: "Lyft Inc",
    symbol: "LYFT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/LYFT.svg",
  },
  {
    name: "Marathon Digital Holdings Inc",
    symbol: "MARA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MARA.svg",
  },
  {
    name: "Meta Platforms Inc",
    symbol: "META",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/META.svg",
  },
  {
    name: "MGO Global Inc",
    symbol: "MGOL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MGOL.svg",
  },
  {
    name: "Meta Materials Inc",
    symbol: "MMAT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MMAT.svg",
  },
  {
    name: "Marvell Technology Inc",
    symbol: "MRVL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MRVL.svg",
  },
  {
    name: "Microsoft Corporation",
    symbol: "MSFT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MSFT.svg",
  },
  {
    name: "Match Group Inc",
    symbol: "MTCH",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MTCH.svg",
  },
  {
    name: "Micron Technology Inc",
    symbol: "MU",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MU.svg",
  },
  {
    name: "Mullen Automotive Inc",
    symbol: "MULN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MULN.svg",
  },
  {
    name: "Microvision Inc",
    symbol: "MVIS",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MVIS.svg",
  },
  {
    name: "Netflix Inc",
    symbol: "NFLX",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/NFLX.svg",
  },
  {
    name: "Nikola Corporation",
    symbol: "NKLA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/NKLA.svg",
  },
  {
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/NVDA.svg",
  },
  {
    name: "Ocugen Inc",
    symbol: "OCGN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/OCGN.svg",
  },
  {
    name: "Opendoor Technologies Inc",
    symbol: "OPEN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/OPEN.svg",
  },
  {
    name: "PacWest Bancorp",
    symbol: "PACW",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PACW.svg",
  },
  {
    name: "Paramount Global",
    symbol: "PARA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PARA.svg",
  },
  {
    name: "Payoneer Global Inc",
    symbol: "PAYO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PAYO.svg",
  },
  {
    name: "PDD Holdings Inc",
    symbol: "PDD",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PDD.svg",
  },
  {
    name: "Plug Power Inc",
    symbol: "PLUG",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PLUG.svg",
  },
  {
    name: "Peloton Interactive Inc",
    symbol: "PTON",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PTON.svg",
  },
  {
    name: "PayPal Holdings Inc",
    symbol: "PYPL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/PYPL.svg",
  },
  {
    name: "QUALCOMM Inc",
    symbol: "QCOM",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/QCOM.svg",
  },
  {
    name: "Invesco QQQ Trust Series 1",
    symbol: "QQQ",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/QQQ.svg",
  },
  {
    name: "Rigetti Computing Inc",
    symbol: "RGTI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/RGTI.svg",
  },
  {
    name: "Riot Platforms Inc",
    symbol: "RIOT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/RIOT.svg",
  },
  {
    name: "Rivian Automotive Inc",
    symbol: "RIVN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/RIVN.svg",
  },
  {
    name: "Roku Inc",
    symbol: "ROKU",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/ROKU.svg",
  },
  {
    name: "Sabre Corporation",
    symbol: "SABR",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SABR.svg",
  },
  {
    name: "Sientra Inc",
    symbol: "SIEN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SIEN.svg",
  },
  {
    name: "Sirius XM Holdings Inc",
    symbol: "SIRI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SIRI.svg",
  },
  {
    name: "Sonoma Pharmaceuticals Inc",
    symbol: "SNOA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SNOA.svg",
  },
  {
    name: "SoFi Technologies Inc",
    symbol: "SOFI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SOFI.svg",
  },
  {
    name: "SoundHound AI Inc",
    symbol: "SOUN",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SOUN.svg",
  },
  {
    name: "ProShares UltraPro Short QQQ",
    symbol: "SQQQ",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/SQQQ.svg",
  },
  {
    name: "Trip com Group Ltd",
    symbol: "TCOM",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TCOM.svg",
  },
  {
    name: "TG Therapeutics Inc",
    symbol: "TGTX",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TGTX.svg",
  },
  {
    name: "Tingo Group Inc",
    symbol: "TIO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TIO.svg",
  },
  {
    name: "Tilray Brands Inc",
    symbol: "TLRY",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TLRY.svg",
  },
  {
    name: "iShares 20 plus Year Treasury Bond",
    symbol: "TLT",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TLT.svg",
  },
  {
    name: "Oncology Institute Inc",
    symbol: "TOI",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TOI.svg",
  },
  {
    name: "ProShares UltraPro QQQ",
    symbol: "TQQQ",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TQQQ.svg",
  },
  {
    name: "Tesla Inc",
    symbol: "TSLA",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TSLA.svg",
  },
  {
    name: "Direxion Daily ETF",
    symbol: "TSLL",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TSLL.svg",
  },
  {
    name: "T2 Biosystems Inc",
    symbol: "TTOO",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/TTOO.svg",
  },
  {
    name: "Frontier Group Holdings Inc",
    symbol: "ULCC",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/ULCC.svg",
  },
  {
    name: "Upstart Holdings Inc",
    symbol: "UPST",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/UPST.svg",
  },
  {
    name: "Warner Brothers Discovery Inc",
    symbol: "WBD",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/WBD.svg",
  },
  {
    name: "Workhorse Group Inc",
    symbol: "WKHS",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/WKHS.svg",
  },
  {
    name: "Wearable Devices Ltd",
    symbol: "WLDS",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/WLDS.svg",
  },
  {
    name: "XP Inc",
    symbol: "XP",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/XP.svg",
  },
  {
    name: "Yunji Inc",
    symbol: "YJ",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/YJ.svg",
  },
];

module.exports = marketData;
