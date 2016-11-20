if Rails.configuration.webpack[:use_manifest]
  asset_manifest = Rails.root.join('public', 'assets', 'manifest.json')

  if File.exist?(asset_manifest)
    Rails.configuration.webpack[:asset_manifest] = JSON.parse(
      File.read(asset_manifest),
    ).with_indifferent_access
  end
end
