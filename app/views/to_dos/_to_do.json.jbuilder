json.extract! to_do, :id, :description, :completed, :created_at, :updated_at
json.url to_do_url(to_do, format: :json)
