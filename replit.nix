{ pkgs }: {
  deps = [
    pkgs.python36
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}