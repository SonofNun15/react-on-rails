Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  get 'register' => 'users#new'
  post 'register' => 'users#create'
  get 'profile' => 'users#edit'
  patch 'profile' => 'users#update'
  get 'password' => 'users#edit_password'
  post 'password' => 'users#update_password'

  get 'login' => 'session#new'
  post 'login' => 'session#create'
  post 'logout' => 'session#destroy'

  get 'vehicle/new' => 'vehicle#new', as: 'new_vehicle'
  post 'vehicle' => 'vehicle#create'

  get 'vehicle/:id' => 'vehicle#show', as: 'show_vehicle'
end
