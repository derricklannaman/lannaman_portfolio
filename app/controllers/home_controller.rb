class HomeController < ApplicationController
	def index
  @full_stack = %w(HTML5, CSS3, Sass, Javascript, jQuery, Git, Ruby, Rails, ajax)

  quotes = []
  quotes << "Yeah, I'm comfortable with " << "I'm constantly learning new things in " << "I Love " << "Because hard work pays off, I know " << "I dream in " << "Practice only makes for improvement. So, I practice " << "The road to full-stack enlightenment is paved with "
  @quote = quotes.sort.sample
	end

end