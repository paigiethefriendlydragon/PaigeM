class PaigesController < ApplicationController
  def index
    @paiges = Paige.all
  end
  def show
    @paige = Paige.find_by(params[:id])
  end
end
