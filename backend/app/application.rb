class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/items/) && req.get?
      items = Item.all
      return [200, { 'Content-Type' => 'application/json' }, [ items.to_json ]]

    elsif req.path.match(/items/) && req.post?
      data = JSON.parse req.body.read
      item = Item.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ item.to_json ]]


    elsif req.path.match(/users/) && req.get?
      users = User.all
      return [200, { 'Content-Type' => 'application/json' }, [ users.to_json ]]


    elsif req.path.match(/categories/) && req.get?
      categories = Category.all
      return [200, { 'Content-Type' => 'application/json' }, [ categories.to_json ]]


    elsif req.delete?
      id = req.path_info.split('/items/').last
      item = Item.find(id)
      item.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Item deleted"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
