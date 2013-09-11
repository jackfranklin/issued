class UsersController < ApplicationController
  respond_to :json
  def index
    render :json => User.all
  end

  def create
    user = User.create(user_params)
    user.save
    render :nothing => true
  end

  def destroy
    user = User.find(params[:id])
    user.delete
    render :nothing => true
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render :nothing => true
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :avatar)
  end
end
