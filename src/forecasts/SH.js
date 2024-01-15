import React from 'react';

const SH = () => {
  const widgetHtml = `
    <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
    <div class="wf-width-cont surf-fc-widget">
      <div class="widget-container">
        <div class="external-cont">
          <iframe
            class="surf-fc-i"
            allowtransparency="true"
            src="//www.surf-forecast.com/breaks/Sandy-Hook-The-Cove/forecasts/widget/a"
            scrolling="no"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />;
};

export default SH;
