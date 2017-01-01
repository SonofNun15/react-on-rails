module ReactHelper
  def react_component(component, data)
    id = generate_id
    script_tag = script component, id, data
    "<div id=\"#{id}\"></div>#{script_tag}".html_safe
  end

  private
  def generate_id
    SecureRandom.uuid[0..7]
  end

  def script(component, id, data)
    "<script>
      var react = function() {
        renderReact('#{id}', '#{component}', #{data.to_json})
      }

      document.addEventListener('DOMContentLoaded', react);
    </script>"
  end
end
