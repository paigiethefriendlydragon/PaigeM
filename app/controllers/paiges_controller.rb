class PaigesController < ApplicationController

    def index
      @paiges = Paige.all
    end

    def show
      @paige = Paige.find(params[:id])
    end
end
