Rails.application.routes.draw do
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
