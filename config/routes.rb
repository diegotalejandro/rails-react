Rails.application.routes.draw do
  devise_for :admins
  devise_for :users,  path: 'users', controllers: {
    sessions: 'users/sessions'
  }
  root 'home#index'
  namespace :admin do
    resources :asistencias
end
namespace :user do
resources :asistencias
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
