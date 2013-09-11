class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.string :description
      t.datetime :due_date
      t.integer :user_id
      t.integer :assignee

      t.timestamps
    end
  end
end
