
/**
 * jQuery textAdjust
 *
 * Adjust rows to prevent show scrollbars on textarea by grow/shrink rows.
 *
 * @author Christian Schmid <christian@onuo.de>
 * @version 0.0.1
 *
 * Access:
 *
 *   config:
 *     - inside plugin:   plugin.cnf.propertyName
 *     - outside plugin:  element.textAdjust.cnf.propertyName
 *
 *   public methods:
 *     - inside plugin:   plugin.methodName(arg1, arg2, ... argn)
 *     - outside plugin:  element.data('textAdjust').publicMethod(arg1,arg2,...)
 *
 */
(function($)
{
  $.textAdjust = function(el, options)
  {
    // default options
    var defaults = { min: 2, max: 10 };
    // calculation variables
    var scrollHeight, lineHeight, startRows;
    // current instance of the object
    var plugin = this;
    // public configuration 
    plugin.cnf = {};
    // reference to DOM element
    var element = el;
    // reference to the jQuery version
    var $element = $(el); 

    /**
     * Init
     * 
     * "Constructor" - Called when object is created
     */
    plugin.init = function ()
    {
      // merge cnf
      plugin.cnf = $.extend({}, defaults, getDataOptions(), options);
      
      // rows attribute not defined -> create it
      if (element.rows === undefined || element.rows > plugin.cnf.min)
      {
        element.rows = plugin.cnf.min;
      }
      // save initial rows cause we adjust it
      startRows = element.rows;
      // validate min > 0
      if (plugin.cnf.min < 1)
      {
        plugin.cnf.min = 1;
      }
      // validate min < max
      if (plugin.cnf.min >= plugin.cnf.max)
      {
        plugin.cnf.max = (plugin.cnf.min + defaults.max);
      }
      // save value
      var val = element.value;
      // clear
      element.value = '';
      // set scroll height
      scrollHeight = element.scrollHeight;
      // reset value
      element.value = val;
      // set line height
      lineHeight = parseInt($element.css('lineHeight'));
      // listen input event
      $element.on('input', plugin.recalc);
      // trigger init event
      //$element.trigger('textAdjust.init');
      // chaining
      return  plugin;
    };

    /**
     * Destroy plugin and unbind element
     */
    plugin.destroy = function()
    {
      $element
        .css('backgroundColor', 'red')
        .removeData()
        .trigger('textAdjust.destroy')
        .attr('rows', startRows)
        .unbind()
      ;
      // chaining
      return plugin;
    };
    
    /**
     * Recalc positions
     */
    plugin.recalc = function()
    {
      // shrink to min rows
      var current = element.rows;
      element.rows = plugin.cnf.min;
      // calc new rows
      var rows = plugin.cnf.min + Math.ceil((element.scrollHeight - scrollHeight) / lineHeight);
      // keep below max rows
      if (rows > plugin.cnf.max)
      {
        rows = plugin.cnf.max;
      }
      // update element
      element.style.height = $element.outerHeight();
      element.rows = rows;
      element.style.height = 'auto';
      // trigger event
      $element.trigger('textAdjust.' + (current < rows ? 'grow' : (current > rows ? 'shrink' : 'nochange')), [current, rows]);
      // chaining
      return plugin;
    };

    /**
     * Get data-options from html element
     */
    var getDataOptions = function()
    {
      // apply "data-" attributes to options chain
      var options = {};
      // iterate default options
      $.each(defaults, function(key)
      {
        // try to find a "data-{key}" attribute
        var appendix = (key === 'min' || key === 'max') ? '-rows' : '';
        var htmlOption = $element.attr('data-' + key + appendix);
        // found data-option
        if (htmlOption !== undefined)
        {
          // setting value is integer
          if (defaults[key] === parseInt(defaults[key], 10))
          {
            var parsedOption = parseInt(htmlOption, 10);
            // only use "real" integers
            if (isNaN(parsedOption) === false)
            {
              options[key] = parsedOption;
            }
          }
          // setting is string
          else
          {
            options[key] = htmlOption;
          }
        }
      });
      
      return options;
    };

    /** Init and kickstart **/
    plugin.init().recalc();
  };

  // add the plugin to the jQuery.fn object
  $.fn.textAdjust = function (options)
  {
    // iterate through the DOM elements we are attaching the plugin to
    return this.filter('textarea').each(function()
    {
      var plugin;
      // if plugin has not already been attached to the element
      if (undefined === $(this).data('textAdjust'))
      {
        // create instance
        plugin = new $.textAdjust(this, options);
        // jQuery reference to the plugin object
        $(this).data('textAdjust', plugin);
      }
      // handle commands
      if ($.type(options) === 'string')
      {
        plugin = plugin || $(this).data('textAdjust');
        switch (options)
        {
          case 'destroy':
            plugin.destroy();
            break;
          default:
            console.log('command ' + options + ' not found!');
        }
      }
    });
  };

}(jQuery));