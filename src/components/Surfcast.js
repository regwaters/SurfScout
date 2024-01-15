// SurfForecastWidget.js
import React from 'react';

const SurfForecastWidget = () => {
  const widgetHtml = `
    <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
    <div class="wf-width-cont surf-fc-widget">
      <div class="widget-container">
        <div class="external-cont">
          <iframe class="surf-fc-i" allowtransparency="true" src="//www.surf-forecast.com/breaks/Harvey-Cedars/forecasts/widget/i" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe>
          <div class="footer">
            <a class="logo" href="//www.surf-forecast.com/"><img src="//www.surf-forecast.com/images/widget.png" width="1" height="1" /></a>
            <div class="about" id="cmt">
              View detailed surf forecast for <a href="//www.surf-forecast.com/breaks/Harvey-Cedars">Harvey Cedars</a>. Visit <a href="//www.surf-forecast.com/breaks/Harvey-Cedars">surf-forecast.com</a> for more details, long-range forecasts, surf reports, swell, and weather maps.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />;
};

export default SurfForecastWidget;
