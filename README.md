
# Bump Semantic Version

This action gives you a bumped semantic version, given the version you want to bump and a string ('MAJOR', 'MINOR', 'PATCH').

## Inputs

### `semantic-version`

**Required** The semantic version you want to increase.

### `version-type`

**Required** The portion of the semantic version you want to increase ('MAJOR', 'MINOR', 'PATCH'). Default `MINOR`.

## Outputs

### `bumped-semantic-version`

The bumped semantic version.

## Example usage

    name: Get Bumped Semantic Version
      id: bsv
      uses: ./
      with:
        semantic-version: ${{ steps.lrb.outputs.last-semver }}
        version-type: 'MINOR'
