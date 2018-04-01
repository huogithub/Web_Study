    require([
        'config',
         'jquery',
        'jquery-easyui',
        'commonFn',
        'app'
    ], function (
        config,
        $,
        easyui,
        commonFn,
        app
    ) {  
    	  window.commonFn = commonFn;
    	  app.init(); 
    });
