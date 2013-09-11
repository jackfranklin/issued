class AddTagsIssueManyToMany < ActiveRecord::Migration
  def change
    create_table :issues_tags do |t|
      t.integer :tag_id
      t.integer :issue_id
    end
  end
end
