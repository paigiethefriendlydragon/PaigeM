Rails.application.routes.draw do
  root 'paiges#index'
  devise_for :users

  resources :paiges, path: "paiges", only: [:index, :show]

    namespace :api do
      namespace :v1 do
        resources :paiges, path: "paiges", only: [:index, :show]
      end
    end
end
