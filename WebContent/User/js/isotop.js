jQuery(document).ready(function(){"use strict";});jQuery(function($){var $container=$('.cp-gallery .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});});jQuery(function($){var $container=$('.cp-gallery-elite .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});});jQuery(function($){var $container=$('.cp-gallery-masonry .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});});jQuery(function($){var $container=$('.cp-masonry-posts .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});});jQuery(document).ready(function($){if($(".cp-masonry-posts-50").length){jQuery(function($){var $container=$('.cp-masonry-posts-50 .isotope');$container.imagesLoaded(function(){$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',isResizeBound:false,masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});});});}});