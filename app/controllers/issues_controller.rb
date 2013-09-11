class IssuesController < ApplicationController
  respond_to :json
  def index
    render :json => Issue.all
  end

  def show
    render :json => Issue.find(params[:id])
  end
end
