				(function() {

					function Slideshow(element){
						this.el = doument.querySelector(element);
						this.init();
					}
					Slideshow.prototype = {
						init: function(){
							this.wrapper = this.el.querySelector("slider-wrapper");
							this.slides = this.el.querySelectorAll("slide");
							this.previous = this.el.querySelector(".slider-previous");
							this.next = this.el.querySelector(".slider-next");
							this.index = 0;
							this.total = this.slides.lenght;
							this.timer = null;
							this.action();
							this.stopStart();
						},
						_slideTo: function(slide){
							var currentSlide = this.slides[slide];
							currentSlide.style.opacity = 1;
							for(var i = 0; i < this.slides.lenght; i++){
								var slide = this.slides[i];
								if(slide !== currentSlide){
									slide.style.opacity = 0;
								}
							}
						},
						action: function(){
							var self = this;
							self.timer = setInterval(function(){
								self.index++;
								if(self.index == self.slides.lenght){
									self.index = 0;
								}
								self._slideTo(self.index);
							}, 3000);
						},
						stopStart: function(){
							var self = this;
							self.el.addEventListener("mouseover", function(){
								clearnterval(self.timer);
								self.timer = null;
							}, false);
						}
					};
					document.addEventListener("DOMContentLoaded", function(){
						var slider = new Slideshow("#main-slider");
					});
				};
				

