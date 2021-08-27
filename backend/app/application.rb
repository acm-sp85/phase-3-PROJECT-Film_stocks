class Application

  def call(env)
    resp = Rack::Response.new
    @req = Rack::Request.new(env)

  if @req.path.match(/rolls/) && params_id && @req.get?
    roll = Roll.find(params_id)
    roll_with_info =  {
      id: roll.id,
      name: roll.name,
      brand: roll.brand.name,
      format: roll.format.medium,
      iso: roll.iso,
      price: roll.price,
      description: roll.description,
      img_url: roll.img_url
    }
    return [200, { 'Content-Type' => 'application/json' }, [ roll_with_info.to_json ]]
  elsif @req.path.match(/rolls/) && @req.get?
      rolls = Roll.all
      rolls_with_info = rolls.map do |roll|
        {
          id: roll.id,
          name: roll.name,
          brand: roll.brand.name,
          format: roll.format.medium,
          iso: roll.iso,
          price: roll.price,
          description: roll.description,
          img_url: roll.img_url
        }
      end
      return [200, { 'Content-Type' => 'application/json' }, [ rolls_with_info.to_json ]]
      


    elsif @req.path.match(/rolls/) && @req.post?
      data = JSON.parse @req.body.read
      roll = Roll.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ roll.to_json ]]
      
    elsif @req.delete?
      id = @req.path_info.split('/rolls/').last
      roll = Roll.find(id)
      roll.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Roll deleted"}.to_json ]]

    elsif @req.path.match(/brands/) && @req.get?
      brands = Brand.all
      return [200, { 'Content-Type' => 'application/json' }, [ brands.to_json ]]


    elsif @req.path.match(/formats/) && @req.get?
      formats = Format.all
      return [200, { 'Content-Type' => 'application/json' }, [ formats.to_json ]]




    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

  private

  def params_id
    @req.path_info[/\d+/]
  end

end
