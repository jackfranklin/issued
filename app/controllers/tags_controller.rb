class TagsController < ApplicationController
  respond_to :json
  def index
    render :json => Tag.all
  end

  def show
    render :json => Tag.find(params[:id])
  end
end
