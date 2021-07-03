{
  /****** Core Editor ******/
  "editor.fontFamily": " 'Fira Code', 'Inconsolata', 'Roboto Mono', 'Fira Code', Menlo, Monaco, 'Courier New', 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.renderWhitespace": "none",
  "editor.renderIndentGuides": false,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.occurrencesHighlight": true,
  "editor.tabSize": 4,
  "editor.tokenColorCustomizations": {
    // "comments": "#77f3ff"
    "comments": "#1b8d1b"
  },
  "editor.rulers": [120],
  "editor.fontWeight": "500",
  "editor.minimap.enabled": false,
  "workbench.colorCustomizations": {
    "editor.selectionBackground": "#495653",
    "editor.selectionHighlightBackground": "#495653",
    "editor.wordHighlightBackground": "#495653",
    "editor.wordHighlightStrongBackground": "#495653",
    "editor.stackFrameHighlightBackground": "#60561d"
  },
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.panel.defaultLocation": "bottom",
  "workbench.settings.editor": "json",
  "workbench.list.multiSelectModifier": "alt",
  "explorer.openEditors.visible": 0,
  "breadcrumbs.enabled": true,
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.shellArgs.osx": [],
  "terminal.integrated.rendererType": "canvas",
  "debug.toolBarLocation": "docked",
  "window.zoomLevel": -1,
  "window.nativeTabs": true,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.pyc": true
  },
  "search.useIgnoreFiles": true,
  "explorer.confirmDragAndDrop": false,
  /****** Languages ******/
  "typescript.suggest.completeFunctionCalls": true,
  "javascript.suggest.completeFunctionCalls": true,
  "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
  "html.format.enable": true,
  "[html]": {
    "editor.tabSize": 4
  },
  "[scss, css]": {
    "editor.tabSize": 4,
    "editor.formatOnSave": true
  },
  "php.validate.enable": true,
  "php.validate.executablePath": "/usr/local/bin/php",
  "php.validate.run": "onSave",
  "php.suggest.basic": false,
  "emmet.triggerExpansionOnTab": true,
  /****** Extensions ******/
  "extensions.ignoreRecommendations": true,
  "emojisense.languages": {
    "markdown": true,
    "git-commit": false,
    "plaintext": false,
    "json": true,
    "javascript": true
  },
  "markdownlint.config": {
    "MD013": false,
    "MD007": false
  },
  "line-counter.excludes": [
    "**/.vscode/**",
    "**/node_modules/**",
    "**/vendor/**"
  ],
  "line-counter.includes": ["**/*"],
  "gitlens.keymap": "chorded",
  "gitlens.advanced.blame.delayAfterEdit": 0,
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true
  },
  "gitlens.heatmap.toggleMode": "window",
  "gitlens.currentLine.enabled": false,
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.historyExplorer.enabled": true,
  "materialTheme.autoApplyIcons": false,
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true,
  "workbench.sideBar.location": "left",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.statusBar.visible": true,
  "workbench.activityBar.visible": true,
  "workbench.tree.indent": 18,
  "workbench.tree.renderIndentGuides": "none",
  "workbench.colorTheme": "Xcode 10 Default Dark",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.accessibilitySupport": "off",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 2500
}
