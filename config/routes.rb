Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  post 'register' => 'users#create'
  get 'profile' => 'users#get'
  post 'profile' => 'users#update'
  post 'password' => 'users#update_password'

  post 'login' => 'session#create'
  post 'logout' => 'session#destroy'

  resources :vehicles do
    resources :fuelings
    resources :maintenance
  end
end
