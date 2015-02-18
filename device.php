<!doctype html>
<html>

<head>
  <!-- <script type="text/javascript" src="bower_components/modernizr/modernizr.js"></script> -->
  <script type="text/javascript" src="bower_components/ua-parser-js/src/ua-parser.min.js"></script>
  <script type="text/javascript" src="bower_components/devicejs/lib/device.min.js"></script>

  <!-- ads -->
  <script type="text/javascript" src="http://ox-d.clickmena.com/w/1.0/jstag"></script>
  <script type="text/javascript" src="js/openx.js"></script>


  <script type="text/javascript">
    // ua parser
    var parser = new UAParser();
    var result = parser.getResult();
    // console.log(result);


    // openx ads
    var ox = new OpenxObj();
    ox.oxAsync = 'OX_article_async';
    ox.oxSync = 'OX_article_sync';
    ox.addPage = {
      'desktop': 17824,
      'tablet': 18005,
      'mobile': 17837
    };
    ox.oxVar = [
      ['cat', 'category2']
    ];
    ox.positionDeviceAdId = [
      ['ad-above-fold-LB', 'desktop', 557961],
      ['ad-above-fold-MPU', 'desktop', 557957],
      ['ad-below-fold-MPU', 'desktop', 557960, 'async'],
      ['ad-below-fold-LB', 'desktop', 557961, 'async']
    ];
    ox.init();
    ox.syncAdFetchCall();
  </script>
</head>

<body>

  <h2>Sync</h2>

  <h3>ad-above-fold-LB</h3>
  <div id="ad-above-fold-LB-holder" class="ad">
    <div>
      <script type="text/javascript">
        ox.syncAdRender("ad-above-fold-LB");
      </script>
    </div>
  </div>

  <h3>ad-above-fold-MPU-holder</h3>
  <div id="ad-above-fold-MPU-holder" class="ad-sidebar--top">
    <div>
      <script type="text/javascript">
        ox.syncAdRender("ad-above-fold-MPU");
      </script>
    </div>
  </div>

  <hr>

  <h2>Async</h2>
  <div id="ad-below-fold-MPU-holder" class="ad-sidebar--top">
    <div id="ad-below-fold-MPU"></div>
  </div>

  <div id="ad-below-fold-LB-holder" class="ad-sidebar--top">
    <div id="ad-below-fold-LB"></div>
  </div>


  <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript">
    // async ads
    ox.asyncAdUnitsRender();
  </script>
</body>

</html>
