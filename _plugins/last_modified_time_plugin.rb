# _plugins/last_modified_time.rb
module Jekyll
    class LastModifiedTime < Liquid::Tag
      def initialize(tag_name, text, tokens)
        super
        @file_path = text.strip
      end
  
      def render(context)
        # Access the document's path (works even in layouts)
        document_path = context.registers[:page]["path"]
        
        if document_path.nil? || document_path.empty?
          return "No file path available"
        end
  
        # Get the full file path using the document's path
        full_file_path = File.join(Dir.pwd, document_path)
  
        # Check if the file exists and retrieve its last modified time
        if File.exist?(full_file_path)
          # Get the last modified time of the file
          last_modified = File.mtime(full_file_path)
          
          # Return the formatted last modified time
          return last_modified.strftime("%Y-%m-%d %H:%M:%S")
        else
          # If file doesn't exist, return an error message
          return "File not found"
        end
      end
    end
  end
  
  # Register the tag with Liquid
  Liquid::Template.register_tag('last_modified', Jekyll::LastModifiedTime)
  