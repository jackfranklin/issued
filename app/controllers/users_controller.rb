class UsersController < ApplicationController
  respond_to :json
  def index
    render :json => User.all
  end

  def create
    user = User.create(params[:user])
    user.save
    render :nothing => true
  end

  def destroy
    user = User.find(params[:id])
    user.delete
    render :nothing => true
  end
end
