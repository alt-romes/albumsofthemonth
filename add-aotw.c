#include <stdio.h>
#include <stdlib.h>

int main (int argc, char** argv) {

	for(int i=0; i<argc; i++){
		printf("%s\n", argv[i]);
	}
	int num;

	FILE *fptr;
	// use appropriate location if you are using MacOS or Linux
	fptr = fopen("~/everything-else/webdev/albumoftheweek/aotw/albums.js","r+");

	if(fptr == NULL)
	{
		printf("File not found.\n");   
		exit(1);             
	}

	
	fclose(fptr);

	return 0;

}
