function exportIDML()
{
    // Check if any documents are open
    if (app.documents.length == 0){
        alert("No documents to process");
        return;
    }
    
    // Confirmation dialog
    var result = confirm("Export all open documents as IDML files?\n\nIDML files will be saved in the same location as the original documents.");
    
    if (result == false) {
        alert("Process cancelled.");
        return;
    }
    
    var docObj = app.documents;
    var successCount = 0;
    var failCount = 0;
    
    // Process each document
    for(var z=0; z<docObj.length; z++) {
        
        // Skip unsaved documents
        if (docObj[z].saved == false) {
            alert(docObj[z].name + "\n\nThis document has not been saved.\nPlease save the file before processing.");
            failCount++;
            continue;
        }
        
        try {
            // Get file path (save as .idml in the same location as original file)
            var originalPath = docObj[z].fullName.toString();
            var idmlPath = originalPath.replace(/\.indd$/i, ".idml");
            
            // Export as IDML file
            var exportFile = new File(idmlPath);
            docObj[z].exportFile(ExportFormat.indesignMarkup, exportFile, false);
            
            successCount++;
            
        } catch(e) {
            // Display error details
            alert(docObj[z].name + "\n\nExport failed.\n\nError details:\n" + e.message + "\nLine: " + e.line);
            failCount++;
        }
    }
    
    // Display process summary
    var summary = "Process completed.\n\n";
    summary += "Successful: " + successCount + " file(s)\n";
    if (failCount > 0) {
        summary += "Failed: " + failCount + " file(s)";
    }
    alert(summary);
}

// Run script
exportIDML();