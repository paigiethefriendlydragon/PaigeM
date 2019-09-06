class Api::V1::VideosController < ApplicationController

   def index
     render json: Video.all
   end
   def show
     render json: Video.find_by(params[:id])
   end
end
