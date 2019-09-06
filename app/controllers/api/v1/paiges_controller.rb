class Api::V1::PaigesController < ApplicationController

  def index
    render json: Paige.all
  end
  def show
    render json: Paige.find_by(params[:id])
  end
end
