class UsersController < ApplicationController
  respond_to :json
  def index
    render :json => User.all
  end

  def create
    user = User.create(user_params)
    res = user.save
    render :nothing => true
  end

  def destroy
    user = User.find(params[:id])
    user.delete
    render :nothing => true
  end

  def show
    render :json => User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render :nothing => true
  end

  def auth
    name = params[:name]
    pass = params[:password]
    user = User.find_by_username(name)
    if user && user.authenticate(pass)
      session[:user_id] = user.id
      session[:user_name] = user.username
      render :json => { :success => true, :id => user.id, :name => user.username }
    else
      render :json => { :success => false }
    end
  end

  def logout
    session[:user_id] = nil
    render :json => { :success => true }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :avatar, :password, :password_confirmation, :username)
  end
end
