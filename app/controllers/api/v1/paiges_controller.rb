class Api::V1::PaigesController < ApplicationController

    def index
      render json: Paige.all
    end

    def show
      render json: Paige.find(params[:id])
    end

end
