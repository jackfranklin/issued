class IssuesController < ApplicationController
  respond_to :json
  def index
    render :json => Issue.all
  end

  def show
    render :json => Issue.find(params[:id])
  end

  def create
    tags = params[:issue][:tags]
    puts "tags"
    p tags
    issue = Issue.new(issue_params)
    issue.user = User.first
    tags.each do |t|
      tag = Tag.find(t)
      issue.tags << tag
    end
    issue.save
    render :nothing => true
  end

  private

  def issue_params
    params.require(:issue).permit(:title, :description, :assignee, :tags, :due_date)
  end

end
