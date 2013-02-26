LannamanPortfolio::Application.routes.draw do


   root :to => 'home#index'
   match '/calculator', to: 'app#calc'

end
